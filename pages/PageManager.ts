import { Page } from '@playwright/test';
import { IndexPage } from './IndexPage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';


export class PageManager {
    loginPage: LoginPage;
    indexPage: IndexPage;
    registerPage: RegisterPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.indexPage = new IndexPage(page);
        this.registerPage = new RegisterPage(page);
    }
}