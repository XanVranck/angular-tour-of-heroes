import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchEnemyComponent } from './arch-enemy.component';

describe('ArchEnemyComponent', () => {
  let component: ArchEnemyComponent;
  let fixture: ComponentFixture<ArchEnemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchEnemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
