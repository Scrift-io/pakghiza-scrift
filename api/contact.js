const fetch = require('node-fetch');

module.exports = async (req, res) => {
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

  console.log('Received form data:', { name, email, subject, message });

  try {
    const payload = { name, email, subject, message };
    console.log('Sending to Google Apps Script:', payload);
    
    const gsResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbxegdrk04Nfb03WeUXnIk0BLQH09hFgAsEHIxzfwgYkvgSWPDoVRvH-0Kl0oxODNvPgPA/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );
    
    console.log('Google Apps Script response status:', gsResponse.status);
    const responseText = await gsResponse.text();
    console.log('Google Apps Script response:', responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Google Apps Script response:', parseError);
      res.status(500).json({ 
        error: true, 
        message: 'Invalid response from Google Apps Script',
        details: responseText
      });
      return;
    }
    
    if (gsResponse.ok && result.result === 'success') {
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      res.status(500).json({ 
        success: false, 
        error: result,
        message: 'Google Apps Script returned an error'
      });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ 
      error: true, 
      message: err.message,
      details: 'Failed to connect to Google Apps Script'
    });
  }
};
