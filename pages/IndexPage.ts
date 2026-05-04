import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class IndexPage extends BasePage {

  readonly signupEmailInput: Locator;
  readonly SignupButton: Locator;
  readonly pageHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.signupEmailInput = page.getByRole('textbox', { name: 'Email id for Sign Up' });
    this.SignupButton = page.getByRole('link', { name: 'logo' });
    this.pageHeader = page.getByRole('heading', { name: 'Automation Demo Site' });
  }

  async signup(data: any) {

    await this.click(this.signupEmailInput);
    await this.fill(this.signupEmailInput, data.email);
    await this.click(this.SignupButton);
  }

}