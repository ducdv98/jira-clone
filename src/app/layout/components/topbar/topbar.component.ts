import { Component, OnInit } from '@angular/core';

import * as fromStore from '@app/core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '@app/core/interfaces';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  currentUser$!: Observable<User>;

  topbarMenuItems = [
    { name: 'Your work', selected: false },
    { name: 'Projects', selected: true },
    { name: 'Filters', selected: false },
    { name: 'Dashboards', selected: false },
    { name: 'People', selected: false },
    { name: 'Plans', selected: false },
    { name: 'Apps', selected: false },
  ];

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(fromStore.selectCurrentUser));
  }

}
