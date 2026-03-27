// install ajv package for JSON schema validation
// npm install ajv
// This test validates the response from the Books API against a predefined JSON schema to ensure that the API contract is maintained. The schema is defined in a separate file (getBooks.schema.ts) and imported into this test. If the response does not conform to the schema, the test will fail and log the validation errors.

import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { booksSchema } from '../../../schemas/bookstore-service/getBooks.response.schema';

test('Validate Books API Schema @feature:API_Testing @story:Validate books API Schema @severity:medium', async ({ request }) => {

    const response = await request.get(
        'https://bookstore.toolsqa.com/BookStore/V1/Books'
    );

    expect(response.status()).toBe(200);

    const responsebody = await response.json();
    const ajv = new Ajv();
    const validate = ajv.compile(booksSchema);
    const valid = validate(responsebody);

    expect(valid).toBeTruthy();

    if (!valid) {
        console.log(validate.errors);
    }

});