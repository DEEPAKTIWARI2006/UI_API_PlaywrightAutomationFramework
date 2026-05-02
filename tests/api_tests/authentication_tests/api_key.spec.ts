// Most APIs expect the key in the headers, though some allow it in the URL.

test('API Key Example', async ({ request }) => {
    const response = await request.get('https://api.example.com/v1/weather', {
        headers: {
            'x-api-key': 'your-secret-api-key-here'
        },
        // If it's a query param instead:
        // params: { 'api_key': 'your-secret-api-key-here' }
    });
    expect(response.status()).toBe(200);
});