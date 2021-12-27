import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Card, Column } from '@app/core/interfaces';

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
}
