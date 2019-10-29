
import { browser, logging, by } from 'protractor';
import { HeroesPage } from './heroes.po';

describe('Heroes', () => {

  const heroesPage = new HeroesPage();

  beforeEach(() => heroesPage.navigateTo())

  it('Should add a hero', () => {
    heroesPage
      .addHero('LocoMan')
      .expectHeroToBePresentWith('LocoMan')
      .deleteHero('LocoMan')
  })

  it('Should delete a hero', () => {
    heroesPage
      .addHero('DerpMan')
      .expectHeroToBePresentWith('DerpMan')
      .deleteHero('DerpMan')
      .expectHeroNotToBePresentWith('DerpMan')
  })

  it('Should delete top hero, should be removed from dashboard', () => {
    let heroToBeDeleted = String(browser.findElement(by.css('ul.heroes-list')[1]));
    heroesPage
      .expectHeroToBePresentWith(heroToBeDeleted)
      .deleteHero(heroToBeDeleted)
      .navigateToDashboard()
      .expectHeroNotInTopHeroes(heroToBeDeleted)
  })
});
