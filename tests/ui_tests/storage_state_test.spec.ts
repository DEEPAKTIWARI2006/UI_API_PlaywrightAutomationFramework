import { test, expect } from '@playwright/test';
import { applyAllureTags } from '../../utils/allureTags';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login & Storage State functionality test set', () => {

    test.beforeEach(async ({ page }) => {
        await applyAllureTags();

    });

    test(`Valid Login test. save storage state @feature:Login @story:Valid Login with saved state @severity:critical`, async ({ page }) => {
        const login_page = new LoginPage(page);

        await test.step('Entering Email ID to Sign Up', async () => {
            // Block image loading
            await page.route('**/*.{png,jpg,jpeg,svg,gif}', route => route.abort());
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await login_page.login("Admin", "admin123"); //login and save storage state in admin.json file
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(login_page.dashboardHeader()).toBeVisible();
        });
    });

    test.only(`Use StorageState to skip login @admin @feature:Dashboard @story:Skip Login @severity:critical`, async ({ page }) => {
        const login_page = new LoginPage(page);

        await test.step('Entering Email ID to Sign Up', async () => {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(login_page.dashboardHeader()).toBeVisible();
        });
    });
});