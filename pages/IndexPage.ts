import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { HealingEngine } from '../core-ui/HealingEngine';
import { IndexPageLocators } from '../locators/IndexPage.locators';

export class IndexPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async signup(data: any) {

    const emailidField = await HealingEngine.getLocator(this.page, IndexPageLocators.emailid);
    await emailidField.fill(data.email);

    const signupButton = await HealingEngine.getLocator(this.page, IndexPageLocators.signup);
    await signupButton.click();
  }

}