import { test, expect } from '../../fixtures/baseTest';
import { applyAllureTags } from '../../utils/allureTags';
import { config } from '../../configs/index';
import DataManager from '../../utils/DataManager';

const login = await DataManager.getPageData('LoginData');
const data = { login };

test.describe('Login & Storage State functionality test set', () => {

    test.beforeEach(async () => {
        await applyAllureTags();

    });

    test(`Valid Login test. save storage state @feature:Login @story:Valid Login with saved state @severity:critical`, async ({ app, page }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            // Block image loading
            await page.route('**/*.{png,jpg,jpeg,svg,gif}', route => route.abort());
            console.log('Navigating to Login Page' + config.ui.baseUrl3);
            page.context().clearCookies();
            await page.goto(config.ui.baseUrl3);
            await page.waitForLoadState('networkidle');
            await app.loginPage.login(data.login.validUser); //login and save storage state in admin.json file
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(await app.loginPage.getDashboardHeader()).toBeVisible();
        });
    });

    test.use({ storageState: 'storage/admin.json' });

    test(`Use StorageState to skip login @admin @feature:Dashboard @story:Skip Login @severity:critical`, async ({ app, page }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            await page.goto(config.ui.dashboardUrl);
        });

        await test.step('Validate Dashboard is displayed', async () => {
            await expect(await app.loginPage.getDashboardHeader()).toBeVisible();
        });
    });
});