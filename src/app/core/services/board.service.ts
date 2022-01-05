import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Card, Column, User } from '@app/core/interfaces';

@Injectable({ providedIn: 'root' })
export class BoardService {
  constructor(private httpClient: HttpClient) {
  }

  getBoardColumns(): Observable<Array<Column>> {
    const apiUrl = `./assets/responses/columns.json`;

    return this.httpClient.get(apiUrl).pipe(
      map(r => r as Column[]),
      delay(1000)
    );
  }

  getBoardCards(): Observable<Array<Card>> {
    const apiUrl = `./assets/responses/cards.json`;

    return this.httpClient.get(apiUrl).pipe(
      map(r => r as Card[]),
      delay(1000)
    );
  }

  getUsers(): Observable<Array<User>> {
    const apiUrl = `./assets/responses/users.json`;

    return this.httpClient.get(apiUrl).pipe(
      map(r => r as User[]),
      delay(1000)
    );
  }

  createCard(card: Card): Observable<unknown> {
    return of({}).pipe(
      delay(1000)
    );
  }

  getTags(): Observable<Array<string>> {
    const apiUrl = `./assets/responses/labels.json`;

    return this.httpClient.get(apiUrl).pipe(
      map(r => r as string[]),
      delay(1000)
    );
  }
}
