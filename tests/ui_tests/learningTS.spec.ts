import { applyAllureTags } from '../../utils/allureTags';
import { test, expect } from '../../fixtures/baseTest';

test.describe('Register functionality test set', () => {

    test.beforeEach(async ({ page }) => {
        await applyAllureTags();
        await page.goto('https://demo.automationtesting.in');
    });

    test(`Valid Index Page test @feature:Index @story:Valid Signup @severity:critical`, async ({ app }) => {

        await test.step('Entering Email ID to Sign Up', async () => {
            await app.indexPage.signup("deepaksporty@gmail.com");
        });
    })

    test(`Register Page test @feature:Register @story:Valid Registration @severity:high`, async ({ app, page }) => {

        await page.goto('https://demo.automationtesting.in/Register.html');

        await test.step('Enter Registration Details', async () => {
            await app.registerPage.register();
        });

        // page.waitForTimeout(2000);

        await test.step('Validate error message -Please do not select an item in the list.', async () => {
            const error = await app.registerPage.isErrorMessageDisplayed();
            expect(error.valid).toBeFalsy();
            console.log("Error Message: ", error.message);
            // expect(error.message).toBe("Please do not select an item in the list."); // Use this code to fail the test and see the error message in allure report
            expect(error.message).toBe("Please do not select an item in the list."); // Use this code to Pass the test
        });
    })

});