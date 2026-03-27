import { test, expect } from '@playwright/test';
import { applyAllureTags } from '../../utils/allureTags';

test.beforeAll(async () => {
  console.log("Before All Hook: Setting up test environment...");
  // Perform any global setup here, such as initializing databases, starting servers, etc.
});

test.describe('Main page test set', () => {

  test.beforeEach(async ({ page }) => {
    await applyAllureTags();
    await page.goto('https://playwright.dev/');
  });

  test('has title @feature:Title Validation @story:Valid Title test @severity:critical', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link @feature:Navigation @story:Click Get Started @severity:high', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Invalid get started link click @feature:Navigation @story:Click Invalid Get Started @severity:medium', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Dont Get Started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Runtime Script Error Example @feature:Error Handling @story:Handle Runtime Error @severity:high', async ({ page }) => {

    await page.goto('https://example.com');

    // ❌ Intentional runtime error
    const title: any = await page.title();

    // Trying to call function on string → runtime TypeError
    title.click();

  });
});
