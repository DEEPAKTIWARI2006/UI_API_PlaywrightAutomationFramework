import { applyAllureTags } from '../../utils/allureTags';
import { test, expect } from '../../fixtures/baseTest';
import DataManager from '../../utils/DataManager';
import { config } from '../../configs/index';

const [login, register] = await Promise.all([
    DataManager.getPageData('LoginData'),
    DataManager.getPageData('RegisterData')
]);

const data = { login, register };

test.describe('Register functionality test set', () => {

    test.beforeEach(async ({ page }) => {
        await applyAllureTags();
        await page.goto(config.ui.baseUrl1);
    });

    test(`Valid Index Page test @feature:Index @story:Valid Signup @severity:critical`, async ({ app }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            await app.indexPage.signup(data.login.validUser);
        });
    })

    test(`Register Page test @feature:Register @story:Valid Registration @severity:high`, async ({ app, page }) => {

        await page.goto(config.ui.baseUrl2);

        await test.step('Enter Registration Details', async () => {
            await app.registerPage.register(data.register.validUser);
        });

        // page.waitForTimeout(2000);

        await test.step('Validate error message -Please do not select an item in the list.', async () => {
            const error = await app.registerPage.isErrorMessageDisplayed();
            expect(error.valid).toBeFalsy();
            // expect(error.message).toBe("Please do not select an item in the list."); // Use this code to fail the test and see the error message in allure report
            expect(error.message).toBe(data.register.validUser.errorMessage); // Use this code to Pass the test
        });
    })

});