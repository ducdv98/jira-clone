import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { filter, map } from 'rxjs/operators';
import { NzModalRef } from 'ng-zorro-antd/modal/modal-ref';

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
  modalRef!: NzModalRef;

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
    this.store.dispatch(fromStore.getLabels());
    this.store.dispatch(fromStore.getComments());

    this.columns$ = this.store.pipe(select(fromStore.allColumns));

    this.activatedRoute.queryParams.pipe(
      filter(params => params && params.selectedIssue),
      map(params => params.selectedIssue),
      takeUntilDestroyed(this)
    ).subscribe((id) => {
      this.store.dispatch(fromStore.setSelectedCardId({ id }));
      this.openCardDetailsModal();
    });

    this.activatedRoute.queryParams.pipe(
      filter(params => !params?.selectedIssue),
      takeUntilDestroyed(this)
    ).subscribe((id) => {
      if (this.modalRef) {
        this.modalRef.close();
      }
    });
  }

  openCardDetailsModal(): void {
    this.modalRef = this.modal.create({
      nzContent: CardDetailsComponent,
      nzClosable: false,
      nzAutofocus: null,
      nzViewContainerRef: this.viewContainerRef,
      nzWidth: '85%',
      nzFooter: null,
      nzStyle: { top: '5%' },
    });

    this.modalRef.afterClose.subscribe(_ => {
      this.router.navigate(['/board']);
      this.store.dispatch(fromStore.setSelectedCardId({ id: null }));
    });
  }

}
