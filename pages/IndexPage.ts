import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class IndexPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async signup(data: any) {

    await this.page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
    await this.page.getByRole('textbox', { name: 'Email id for Sign Up' }).fill(data.email);
    await this.page.getByRole('button', { name: 'Sign Up' }).click();
  }

}