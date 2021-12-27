import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { Column } from '@app/core/interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<Column>>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(fromStore.getCards());
    this.store.dispatch(fromStore.getColumns());

    this.columns$ = this.store.pipe(select(fromStore.allColumns));
  }

}
