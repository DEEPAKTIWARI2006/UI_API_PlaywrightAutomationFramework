import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);

    }

    async login(data: any) {

        await this.page.getByPlaceholder('Username').fill(data.username);
        await this.page.getByPlaceholder('Password').fill(data.password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.waitForURLContains('dashboard');
        await this.page.context().storageState({ path: 'storage/admin.json' });
    }

    dashboardHeader() {
        return this.page.getByRole('heading', { name: 'Dashboard' });
    }

}