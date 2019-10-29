import { browser, by } from 'protractor';

export class DashboardPage {
    navigateTo() {
        browser.get('/heroes');
        return this;
    }

    expectHeroNotInTopHeroes(name: string) {
        expect(
            browser.isElementPresent(by.cssContainingText('div.module hero', name))
        ).toBeFalsy();
        return this;
    }
}