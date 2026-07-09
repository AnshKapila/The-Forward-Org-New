export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, listId, attributes } = req.body;

    // Validate inputs
    if (!email || !listId) {
      return res.status(400).json({ success: false, error: 'Email and listId are required.' });
    }

    const API_KEY = process.env.BREVO_API_KEY;
    if (!API_KEY) {
      console.error("Missing Brevo API key.");
      return res.status(500).json({ success: false, error: 'Server configuration error.' });
    }

    const payload = {
      email: email,
      listIds: [parseInt(listId, 10)],
      updateEnabled: true,
      attributes: attributes || {}
    };

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (brevoResponse.status === 201 || brevoResponse.status === 204) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await brevoResponse.json();
      console.error("Brevo API error:", errorData);
      return res.status(brevoResponse.status).json({ success: false, error: errorData.message || 'Failed to submit.' });
    }
  } catch (error) {
    console.error("Function error:", error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
