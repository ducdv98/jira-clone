import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { filter, map } from 'rxjs/operators';

import * as fromStore from '@app/core/store';
import { Column } from '@app/core/interfaces';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Destroyable()
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  columns$!: Observable<Array<Column>>;

  constructor(private store: Store<fromStore.AppState>,
              private activatedRoute: ActivatedRoute,
              private modal: NzModalService,
              private viewContainerRef: ViewContainerRef,
              private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(fromStore.getCards());
    this.store.dispatch(fromStore.getColumns());
    this.store.dispatch(fromStore.getUsers());

    this.columns$ = this.store.pipe(select(fromStore.allColumns));

    this.activatedRoute.queryParams.pipe(
      filter(params => params && params.selectedIssue),
      map(params => params.selectedIssue),
      takeUntilDestroyed(this)
    ).subscribe((id) => {
      this.store.dispatch(fromStore.setSelectedCardId({ id }));
      this.openCardDetailsModal();
    });
  }

  openCardDetailsModal(): void {
    const modal = this.modal.create({
      nzContent: CardDetailsComponent,
      nzClosable: false,
      nzAutofocus: null,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '85%',
      nzFooter: null,
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    modal.afterClose.subscribe(_ => {
      this.router.navigate(['/board']);
      this.store.dispatch(fromStore.setSelectedCardId({ id: null }));
    });
  }

}
