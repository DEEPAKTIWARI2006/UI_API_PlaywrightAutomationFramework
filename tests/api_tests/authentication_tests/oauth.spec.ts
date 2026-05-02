// For automated tests, you usually exchange a client_id and client_secret for a temporary access 
// token before running your main requests.

import { test, expect } from '@playwright/test';

test('OAuth 2.0 Flow Example @regression @api', async ({ request }) => {
  // 1. Get the Access Token
  const authResponse = await request.post('https://auth.example.com/token', {
    form: {
      grant_type: 'client_credentials',
      client_id: 'MY_CLIENT_ID',
      client_secret: 'MY_CLIENT_SECRET',
    }
  });
  const { access_token } = await authResponse.json();

  // 2. Use the token for the actual API call
  const dataResponse = await request.get('https://api.example.com/protected', {
    headers: { 'Authorization': `Bearer ${access_token}` }
  });

  expect(dataResponse.ok()).toBeTruthy();
});