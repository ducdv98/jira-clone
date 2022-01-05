import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { User } from '@app/core/interfaces';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-column-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {
  users$!: Observable<Array<User>>;

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(fromStore.allUsers));
  }

}
