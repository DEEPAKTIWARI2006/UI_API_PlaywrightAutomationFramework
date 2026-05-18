import { Locator, Page } from '@playwright/test';
import { LocatorResolver } from './LocatorResolver';

export class HealingEngine {

    /**
     * Main healing method
     */
    static async getLocator(
        page: Page,
        locatorMeta: any,
        timeout: number = 3000
    ): Promise<Locator> {

        // Try primary locator
        if (locatorMeta.primary) {

            const primaryLocator =
                LocatorResolver.buildLocator(
                    page,
                    locatorMeta.primary
                );

            const primaryFound =
                await this.isLocatorWorking(
                    primaryLocator,
                    timeout
                );

            if (primaryFound) {

                console.log(
                    locatorMeta.primary.value + ' -- Primary locator Worked'
                );

                return primaryLocator;
            }

            console.log(
                locatorMeta.primary.value + ' -- Primary locator failed'
            );
        }

        // Try secondary locator
        if (locatorMeta.secondary) {

            const secondaryLocator =
                LocatorResolver.buildLocator(
                    page,
                    locatorMeta.secondary
                );

            const secondaryFound =
                await this.isLocatorWorking(
                    secondaryLocator,
                    timeout
                );

            if (secondaryFound) {

                console.log(
                    locatorMeta.secondary.value + ' -- Secondary locator worked'
                );

                return secondaryLocator;
            }

            console.log(
                locatorMeta.secondary.value + ' -- Secondary locator failed'
            );
        }

        // Future AI healing hook
        const healedLocator =
            await this.tryAIHealing(
                page,
                locatorMeta
            );

        if (healedLocator) {

            console.log(
                'AI healing succeeded'
            );

            return healedLocator;
        }

        throw new Error(
            'All locator healing attempts failed'
        );
    }

    /**
     * Checks whether locator is valid
     */
    private static async isLocatorWorking(
        locator: Locator,
        timeout: number
    ): Promise<boolean> {

        try {

            await locator.first().waitFor({
                state: 'visible',
                timeout
            });

            return true;

        } catch {

            return false;
        }
    }

    /**
     * Placeholder for future AI healing
     */
    private static async tryAIHealing(
        page: Page,
        locatorMeta: any
    ): Promise<Locator | null> {

        console.log(
            'Trying AI healing...'
        );

        /*
            Future implementation:
            - Get DOM snapshot
            - Take screenshot
            - Send failed locator metadata
            - Use AI model
            - Return healed locator
        */

        return null;
    }
}