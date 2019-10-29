import { browser, by, element } from 'protractor';
import { DashboardPage } from './dashboard.po';

export class HeroesPage {
  navigateTo() {
    return browser.get('/heroes');
  }

  addHero(name: string): HeroesPage {
    browser.findElement(by.id('hero-input')).sendKeys(name);
    browser.findElement(by.id('hero-add')).click();
    return this;
  }

  expectHeroToBePresentWith(name: string): HeroesPage {
    expect(
      browser.isElementPresent(by.cssContainingText('ul.heroes li', name))
    ).toBeTruthy();
    return this;
  }

  deleteHero(name: string): HeroesPage {
    browser.findElement(by.cssContainingText('ul.heroes li', name)).click()
    return this;
  }


  expectHeroNotToBePresentWith(name: string): HeroesPage {
    expect(
      browser.isElementPresent(by.cssContainingText('ul.heroes li', name))
    ).toBeFalsy();
    return this;
  }

  navigateToDashboard(): DashboardPage {
    return new DashboardPage().navigateTo();
  }

}
