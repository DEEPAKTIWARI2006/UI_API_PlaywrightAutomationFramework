import { Locator, Page } from '@playwright/test';

export class LocatorResolver {

    static buildLocator(
        page: Page,
        locatorDef: any
    ): Locator {

        switch (locatorDef.type) {

            case 'placeholder':
                return page.getByPlaceholder(locatorDef.value);

            case 'role':
                return page.getByRole(
                    locatorDef.value.role,
                    {
                        name: locatorDef.value.name,
                        exact: locatorDef.value.exact ?? false
                    }
                );

            case 'text':
                return page.getByText(
                    locatorDef.value,
                    { exact: locatorDef.value.exact ?? false }
                );

            case 'css':
                return page.locator(locatorDef.value);

            case 'xpath':
                return page.locator(`xpath=${locatorDef.value}`);

            default:
                throw new Error(
                    `Unsupported locator type: ${locatorDef.type}`
                );
        }
    }
}