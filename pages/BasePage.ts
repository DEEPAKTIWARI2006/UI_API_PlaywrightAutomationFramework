import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForURLContains(text: string) {
        await this.page.waitForURL(`**${text}**`);
    }

    async expectURL(text: string) {
        await expect(this.page).toHaveURL(new RegExp(text));
    }

}