// This is the most common approach. The token is usually retrieved from a login 
// endpoint first, then stored and reused.

// first call the login endpoint to get the token, then use it in subsequent requests.
// token is sent in the Authorization header as a Bearer token.
// The server validates the token and grants access if it's valid.

import { test, expect } from '@playwright/test';

test('Bearer Token Example', async ({ request }) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Your JWT

    const response = await request.get('https://api.example.com/user/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    expect(response.ok()).toBeTruthy();
});