import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { ArchEnemy } from './ArchEnemy';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArchEnemyService {

  private archEnemyUrl: string = 'http://10.161.128.89:3001/api/archEnemies/byHero'

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  findArchEnemy(heroId: number): Observable<ArchEnemy> {
    return this.http.get<ArchEnemy>(this.archEnemyUrl + `/${heroId}`)
      .pipe(
        tap(enemy => this.log(`arch enemy found w/ id=${enemy.id}`)),
        catchError(this.handleError<ArchEnemy>('findArchEnemy'))
      );
  }

  private log(message: String): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
