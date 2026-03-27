import { test, expect } from '@playwright/test';
import { booksSchema } from '../../../schemas/bookstore-service/getBooks.response.schema';
import { validateSchema } from '../../../api-core/schemaValidator';

test('Validate Books Contract @feature:API_Testing @story:Validate books API Schema @severity:critical', async ({ request }) => {

    const response = await request.get(
        'https://bookstore.toolsqa.com/BookStore/V1/Books'
    );

    const body = await response.json();

    const isValid = validateSchema(booksSchema, body);

    expect(isValid).toBeTruthy();

});