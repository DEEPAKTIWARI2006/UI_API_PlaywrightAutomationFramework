import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HealingEngine } from '../core-ui/HealingEngine';
import { LoginPageLocators } from '../locators/LoginPage.locators';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async login(data: any) {

        // Username
        const usernameField = await HealingEngine.getLocator(this.page, LoginPageLocators.username);
        await usernameField.fill(data.username);

        // Password
        const passwordField = await HealingEngine.getLocator(this.page, LoginPageLocators.password);
        await passwordField.fill(data.password);

        // Login Button
        const loginButton = await HealingEngine.getLocator(this.page, LoginPageLocators.loginButton);
        await loginButton.click();

        await this.waitForURLContains('dashboard');

        await this.page.context().storageState({
            path: 'storage/admin.json'
        });
    }

    getDashboardHeader() {
        return HealingEngine.getLocator(this.page, LoginPageLocators.dashboardHeader);
    }
}