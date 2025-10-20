const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, email, subject, message } = req.body;
  try {
    const gsResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbxegdrk04Nfb03WeUXnIk0BLQH09hFgAsEHIxzfwgYkvgSWPDoVRvH-0Kl0oxODNvPgPA/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      }
    );
    const result = await gsResponse.json();
    if (gsResponse.ok && result.result === 'success') {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, error: result });
    }
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
