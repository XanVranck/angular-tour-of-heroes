import { TestBed } from '@angular/core/testing';

import { ArchEnemyService } from './arch-enemy.service';

describe('ArchEnemyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchEnemyService = TestBed.get(ArchEnemyService);
    expect(service).toBeTruthy();
  });
});
