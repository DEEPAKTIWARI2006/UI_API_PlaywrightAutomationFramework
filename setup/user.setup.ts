// user.setup.ts
import { test } from '@playwright/test';

test('login as user', async ({ page }) => {

    await page.goto('/login');

    await page.fill('#user', 'user');
    await page.fill('#pass', 'password');

    await page.click('#login');

    await page.waitForURL('**/home');

    await page.context().storageState({ path: 'storage/user.json' });

});