import { test, expect } from '@playwright/test';

test('Basic Auth Example', async ({ request }) => {
  // Credentials: 'username' and 'password'
  // Playwright handles the Base64 encoding for you
  const response = await request.get('https://api.example.com/data', {
    httpCredentials: {
      username: 'myUser',
      password: 'myPassword',
    }
  });
  expect(response.ok()).toBeTruthy();
});