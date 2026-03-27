// We will validate. Example real contract rules::
// Status code
// Response structure (schema)
// Business rules (contract rules)
// Response must have books array
// Books count must be > 0
// Each book must have unique ISBN
// Pages must be > 0
// Website must be valid URL
// Publisher must not be empty

import { test, expect } from '@playwright/test';

test('Contract Test - Books API @feature:API_Testing @story:Validate books API contract @severity:critical', async ({ request }) => {

    const response = await request.get(
        'https://bookstore.toolsqa.com/BookStore/V1/Books'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Contract Rule-1 → books array exists
    expect(Array.isArray(body.books)).toBeTruthy();

    // Contract Rule-2 → at least one book
    expect(body.books.length).toBeGreaterThan(0);

    // Contract Rule-3 → unique ISBN validation
    const isbnSet = new Set();

    for (const book of body.books) {

        expect(book.isbn).toBeTruthy();
        expect(book.pages).toBeGreaterThan(0);
        expect(book.publisher).not.toBe('');

        // validate that publish_date exists and is a valid date string
        expect(book).toHaveProperty('publish_date');

        // validate response does not have published_date field (typo check)
        expect(book).not.toHaveProperty('published_date');

        // validate that publish_date is a valid date string
        expect(new Date(book.publish_date)).toBeInstanceOf(Date);

        // website URL validation
        expect(book.website.startsWith('http')).toBeTruthy();

        // uniqueness check
        expect(isbnSet.has(book.isbn)).toBeFalsy();
        isbnSet.add(book.isbn);
    }

});