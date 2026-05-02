import { test, expect } from '../../fixtures/baseTest';
import { applyAllureTags } from '../../utils/allureTags';

test.describe('Login & Storage State functionality test set', () => {

    test.beforeEach(async () => {
        await applyAllureTags();

    });

    test(`Valid Login test. save storage state @feature:Login @story:Valid Login with saved state @severity:critical`, async ({ app, page }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            // Block image loading
            await page.route('**/*.{png,jpg,jpeg,svg,gif}', route => route.abort());
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await app.loginPage.login("Admin", "admin123"); //login and save storage state in admin.json file
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(app.loginPage.dashboardHeader()).toBeVisible();
        });
    });

    test.only(`Use StorageState to skip login @admin @feature:Dashboard @story:Skip Login @severity:critical`, async ({ app, page }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(app.loginPage.dashboardHeader()).toBeVisible();
        });
    });
});