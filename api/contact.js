const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  console.log('📧 Contact form submission:', { name, email, subject, message });

  try {
    // Google Apps Script URL for contact form submissions
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrJNxtWMhnkclRj2brTwyH3QNHPm_WDBfsASF5Ai5siooFYB_ieBkLJ4v19OqpdWZAng/exec';
    
    const payload = { name, email, subject, message };
    
    console.log('📤 Sending to Google Sheets via Apps Script...');
    
    const gsResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'PakGhiza-Contact-Form/1.0'
      },
      body: JSON.stringify(payload)
    });
    
    console.log('📊 Google Apps Script response status:', gsResponse.status);
    
    const responseText = await gsResponse.text();
    console.log('📋 Response from Google Apps Script:', responseText);
    
    // Check if response is HTML (error page) instead of JSON
    if (responseText.trim().startsWith('<') || responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
      console.error('❌ Google Apps Script returned HTML error page');
      res.status(500).json({ 
        success: false,
        error: 'Google Apps Script error',
        message: 'The Google Apps Script is not properly configured. Please check the deployment settings.'
      });
      return;
    }
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Failed to parse Google Apps Script response:', parseError);
      res.status(500).json({ 
        success: false,
        error: 'Invalid response from Google Apps Script',
        message: 'The Google Apps Script returned invalid data. Please check the script configuration.'
      });
      return;
    }
    
    if (gsResponse.ok && result.result === 'success') {
      console.log('✅ Contact form submitted successfully to Google Sheets');
      res.status(200).json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      });
    } else {
      console.error('❌ Google Apps Script returned error:', result);
      res.status(500).json({ 
        success: false,
        error: result.message || 'Unknown error from Google Apps Script',
        message: 'Failed to save your message. Please try again later.'
      });
    }
  } catch (err) {
    console.error('❌ API Error:', err);
    res.status(500).json({ 
      success: false,
      error: 'Server error',
      message: 'Sorry, there was a problem sending your message. Please try again later.'
    });
  }
};
