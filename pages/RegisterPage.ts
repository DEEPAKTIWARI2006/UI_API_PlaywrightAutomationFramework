import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly phoneInput: Locator;
  readonly countryDropdown: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.locator('input[type="email"]');
    this.addressInput = page.locator('textarea');
    this.phoneInput = page.locator('input[type="tel"]');
    this.countryDropdown = page.locator('#countries');
    this.passwordInput = this.page.locator('#firstpassword');
    this.confirmPasswordInput = this.page.locator('#secondpassword');
    this.submitButton = this.page.getByRole('button', { name: 'Submit' });
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

    const errorTextActual = this.countryDropdown.evaluate((el: any) => {
      return {
        valid: el.checkValidity(),
        message: el.validationMessage
      };
    });

    return errorTextActual;
  }


  async register(data: any) {
    await this.click(this.firstNameInput);
    await this.fill(this.firstNameInput, data.firstName);
    await this.click(this.lastNameInput);
    await this.fill(this.lastNameInput, data.lastName);
    await this.click(this.addressInput);
    await this.fill(this.addressInput, data.address);
    await this.click(this.emailInput);
    await this.fill(this.emailInput, data.email);
    await this.click(this.phoneInput);
    await this.fill(this.phoneInput, data.phone);
    await this.selectGender(data.gender)
    await this.selectHobby(data.hobby)
    await this.selectLanguage(data.language);
    await this.click(this.phoneInput);
    await this.selectSkills(data.skills);
    await this.selectCountry(data.country);
    await this.selectDOBYear(data.dob_year);
    await this.selectDOBMonth(data.dob_month);
    await this.selectDOBDay(data.dob_day);
    await this.click(this.passwordInput);
    await this.fill(this.passwordInput, data.password);
    await this.click(this.confirmPasswordInput);
    await this.fill(this.confirmPasswordInput, data.confirmPassword);
    await this.click(this.submitButton);
    await this.page.screenshot({ path: 'screenshots/Error_Message.png', fullPage: true });
  }

}