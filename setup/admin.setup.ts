// admin.setup.ts
import { test } from '@playwright/test';

test('login as admin', async ({ page }) => {

    await page.goto('/login');
    await page.fill('#user', 'admin');
    await page.fill('#pass', 'password');
    await page.click('#login');
    await page.waitForURL('**/dashboard');
    await page.context().storageState({ path: 'storage/admin.json' });

});