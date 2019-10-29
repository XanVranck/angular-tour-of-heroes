import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs';
import { Hero } from './hero';

fdescribe('HeroService', () => {
  let heroService: HeroService;
  let http;
  let messageService;

  beforeEach(() => {
    http = jasmine.createSpyObj('httpClient', ['get', 'delete']);
    messageService = jasmine.createSpyObj('messageService', ['add'])
    heroService = new HeroService(messageService, http)
  });

  it('should get heroes', (done) => {
    http.get.and.returnValue(of(HEROES));

    heroService.getHeroes().subscribe((actualHeroes: Hero[]) => {
      expect(actualHeroes).toEqual(HEROES);
      expect(messageService.add).toHaveBeenCalled();
      done();
    })
  });

  it('should get heroes by id', (done) => {
    http.get.and.returnValue(of(HEROES[0]));

    heroService.getHeroBy(HEROES[0].id).subscribe((actualHeroe: Hero) => {
      expect(actualHeroe).toEqual(HEROES[0]);
      expect(messageService.add).toHaveBeenCalled();
      done();
    })
  });

  it('should delete hero', (done) => {
    http.delete.and.returnValue(of({}));
    heroService.deleteHero(HEROES[0]).subscribe((actualHeroe: Hero) => {
      expect(messageService.add).toHaveBeenCalled();
      expect(http.delete).toHaveBeenCalledWith(jasmine.stringMatching(`\.*/api/heroes/${HEROES[0].id}`), jasmine.anything())
      done();
    })
  });
});
