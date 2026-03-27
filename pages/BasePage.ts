import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ---------- Navigation ----------
    async navigate(url: string) {
        await this.page.goto(url);
    }

    async reload() {
        await this.page.reload();
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    // ---------- Locator Actions ----------
    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async type(locator: Locator, value: string) {
        await locator.type(value);
    }

    async press(locator: Locator, key: string) {
        await locator.press(key);
    }

    // ---------- Wait Helpers ----------
    async waitForVisible(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async waitForHidden(locator: Locator) {
        await locator.waitFor({ state: 'hidden' });
    }

    async waitForURLContains(text: string) {
        await this.page.waitForURL(`**${text}**`);
    }

    // ---------- Assertions ----------
    async expectVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async expectText(locator: Locator, text: string) {
        await expect(locator).toHaveText(text);
    }

    async expectURL(text: string) {
        await expect(this.page).toHaveURL(new RegExp(text));
    }

    // ---------- Utilities ----------
    async getText(locator: Locator): Promise<string | null> {
        return await locator.textContent();
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }
}