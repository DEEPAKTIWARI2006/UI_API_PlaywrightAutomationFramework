import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';

function getTagValue(title: string, regex: RegExp): string | null {
    const match = regex.exec(title);
    return match && match[1] ? match[1] : null;
}

export async function applyAllureTags() {

    const title = test.info().title;

    const feature = getTagValue(title, /@feature:(\w+)/);
    const story = getTagValue(title, /@story:(\w+)/);
    const severity = getTagValue(title, /@severity:(\w+)/);

    if (feature) await allure.feature(feature);
    if (story) await allure.story(story);
    if (severity) await allure.severity(severity as any);

}