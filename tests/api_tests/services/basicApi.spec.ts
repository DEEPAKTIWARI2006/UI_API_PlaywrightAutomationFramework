import { test, expect, request } from '@playwright/test';

test('Simple GET API Test @feature:API_Testing @story:Validate books API response @severity:critical', async () => {

    const apiContext = await request.newContext({
        baseURL: 'https://bookstore.toolsqa.com'
    });

    const response = await apiContext.get('/BookStore/V1/Books');
    const body = await response.json();
    console.log(body);
    expect(response.status()).toBe(200);
    const book = body.books.find(
        (b: any) => b.isbn === '9781449337711'
    );

    if (!book) {
        throw new Error("Book not found in response");
    }

    const author = book.author;
    console.log(`Author of isbn ${book.isbn} is :`, author);
    expect(book).toBeTruthy();
    expect(book.author).toBe('Glenn Block et al.');
});