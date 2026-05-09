import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }


  async selectGender(gender: string) {
    await this.page.getByRole('radio', { name: `${gender}`, exact: true }).click();
  }

  async selectHobby(hobby: string) {
    await this.page.locator(`input[type="checkbox"][value="${hobby}"]`).click();
  }

  async selectLanguage(language: string) {
    await this.page.locator('#msdd').click();
    await this.page.getByText(language).click();
  }

  async selectSkills(skills: string) {
    await this.page.locator('#Skills').selectOption(skills);
  }

  async selectCountry(country: string) {
    await this.page.locator('.select2-selection__arrow').click();
    await this.page.getByRole('treeitem', { name: `${country}` }).click();
  }

  async selectDOBYear(dob_year: string) {
    await this.page.locator('#yearbox').selectOption(dob_year)
  }

  async selectDOBMonth(dob_month: string) {
    await this.page.getByRole('combobox').nth(4).selectOption(dob_month);
  }

  async selectDOBDay(dob_day: string) {
    await this.page.locator('#daybox').selectOption(dob_day);
  }

  async isErrorMessageDisplayed(): Promise<{ valid: boolean; message: string }> {

    const errorTextActual = this.page.locator('#countries').evaluate((el: any) => {
      return {
        valid: el.checkValidity(),
        message: el.validationMessage
      };
    });

    return errorTextActual;
  }


  async register(data: any) {
    await this.page.getByRole('textbox', { name: 'First Name' }).click();
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(data.firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).click();
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastName);
    await this.page.locator('textarea').click();
    await this.page.locator('textarea').fill(data.address);
    await this.page.getByRole('textbox', { name: 'Email' }).click();
    await this.page.getByRole('textbox', { name: 'Email' }).fill(data.email);
    await this.page.getByRole('textbox', { name: 'Phone' }).click();
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(data.phone);
    await this.selectGender(data.gender)
    await this.selectHobby(data.hobby)
    await this.selectLanguage(data.language);
    await this.page.locator('input[type="tel"]').click();
    await this.selectSkills(data.skills);
    await this.selectCountry(data.country);
    await this.selectDOBYear(data.dob_year);
    await this.selectDOBMonth(data.dob_month);
    await this.selectDOBDay(data.dob_day);
    await this.page.locator('#firstpassword').click();
    await this.page.locator('#firstpassword').fill(data.password);
    await this.page.locator('#secondpassword').click();
    await this.page.locator('#secondpassword').fill(data.confirmPassword);
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.screenshot({ path: 'screenshots/Error_Message.png', fullPage: true });
  }

}