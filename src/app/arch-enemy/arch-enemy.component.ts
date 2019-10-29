import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ArchEnemyService } from '../arch-enemy.service';
import { ArchEnemy } from '../ArchEnemy';

@Component({
  selector: 'app-arch-enemy',
  templateUrl: './arch-enemy.component.html',
  styleUrls: ['./arch-enemy.component.css']
})
export class ArchEnemyComponent implements OnInit {

  @Input()
  heroId: number;

  archEnemy: ArchEnemy;

  constructor(private archEnemyService: ArchEnemyService) { }

  ngOnInit() {
    console.log('hero', this.heroId)
      this.archEnemyService.findArchEnemy(this.heroId)
      .subscribe(enemy => this.archEnemy = enemy);
  }

}
