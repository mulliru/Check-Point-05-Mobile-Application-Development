import axios from 'axios';

const clientId = 'ayyeMTn1MonJVntPJX9THd9Csd2oAPTYy6z1YOsJ5llwpck1gy';
const clientSecret = 'k0gGQHjkkEBWPjKDSQndJpTiG8BtImVLfmffop3k';

let token = '';

async function autenticar() {
  const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  });

  token = response.data.access_token;
  return token;
}

export async function buscarAnimais() {
  if (!token) {
    await autenticar();
  }

  const response = await axios.get('https://api.petfinder.com/v2/animals?limit=10', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.animals;
}
