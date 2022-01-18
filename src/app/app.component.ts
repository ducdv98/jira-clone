import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {
    this.loading$ = this.store.pipe(select(fromStore.selectCardsLoading))
  }
}
