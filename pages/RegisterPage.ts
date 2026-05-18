import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HealingEngine } from '../core-ui/HealingEngine';
import { RegisterPageLocators } from '../locators/RegisterPage.locators';

export class RegisterPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async selectGender(gender: string) {

    const genderLocator =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.gender(gender)
      );

    await genderLocator.click();
  }

  async selectHobby(hobby: string) {

    const hobbyLocator =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.hobby(hobby)
      );

    await hobbyLocator.click();
  }

  async selectLanguage(language: string) {

    const languageDropdown =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.languageDropdown
      );

    await languageDropdown.click();

    const languageOption =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.languageOption(language)
      );

    await languageOption.click();
  }

  async selectSkills(skills: string) {

    const skillsDropdown =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.skills
      );

    await skillsDropdown.selectOption(skills);
  }

  async selectCountry(country: string) {

    const countryDropdown =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.countryDropdown
      );

    await countryDropdown.click();

    const countryOption =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.countryOption(country)
      );

    await countryOption.click();
  }

  async selectDOBYear(dob_year: string) {

    const dobYear =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.dobYear
      );

    await dobYear.selectOption(dob_year);
  }

  async selectDOBMonth(dob_month: string) {

    const dobMonth =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.dobMonth
      );

    await dobMonth.selectOption(dob_month);
  }

  async selectDOBDay(dob_day: string) {

    const dobDay =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.dobDay
      );

    await dobDay.selectOption(dob_day);
  }

  async isErrorMessageDisplayed():
    Promise<{ valid: boolean; message: string }> {

    const countriesValidation =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.countriesValidation
      );

    const errorTextActual =
      countriesValidation.evaluate((el: any) => {

        return {
          valid: el.checkValidity(),
          message: el.validationMessage
        };
      });

    return errorTextActual;
  }

  async register(data: any) {

    // First Name
    const firstName =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.firstName
      );

    await firstName.fill(data.firstName);

    // Last Name
    const lastName =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.lastName
      );

    await lastName.fill(data.lastName);

    // Address
    const address =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.address
      );

    await address.fill(data.address);

    // Email
    const email =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.email
      );

    await email.fill(data.email);

    // Phone
    const phone =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.phone
      );

    await phone.fill(data.phone);

    // Gender
    await this.selectGender(data.gender);

    // Hobby
    await this.selectHobby(data.hobby);

    // Language
    await this.selectLanguage(data.language);

    // Skills
    await this.selectSkills(data.skills);

    // Country
    await this.selectCountry(data.country);

    // DOB
    await this.selectDOBYear(data.dob_year);
    await this.selectDOBMonth(data.dob_month);
    await this.selectDOBDay(data.dob_day);

    // Password
    const password =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.password
      );

    await password.fill(data.password);

    // Confirm Password
    const confirmPassword =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.confirmPassword
      );

    await confirmPassword.fill(
      data.confirmPassword
    );

    // Submit Button
    const submitButton =
      await HealingEngine.getLocator(
        this.page,
        RegisterPageLocators.submitButton
      );

    await submitButton.click();

    await this.page.screenshot({
      path: 'screenshots/Error_Message.png',
      fullPage: true
    });
  }
}