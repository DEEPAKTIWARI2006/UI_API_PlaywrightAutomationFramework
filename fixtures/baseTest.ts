import { test as base } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

type AppFixtures = {
    app: PageManager;
};

export const test = base.extend<AppFixtures>({
    app: async ({ page }, use) => {
        await use(new PageManager(page));
    }
});

export { expect } from '@playwright/test';