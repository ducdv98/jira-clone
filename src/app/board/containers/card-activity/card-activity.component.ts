import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '@app/core/store';
import { AddCommentModel, CommentWithUser, User } from '@app/core/interfaces';
import { ActivityViewMode } from '@app/core/constants';
import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';
import { tap } from 'rxjs/operators';

@Destroyable()
@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss']
})
export class CardActivityComponent implements OnInit {
  currentUser$!: Observable<User>;
  comments$!: Observable<Array<CommentWithUser>>;

  activityLabelControl: FormControl;

  currentActivityTab: ActivityViewMode = 'comments';

  constructor(private store: Store<fromStore.AppState>) {
    this.activityLabelControl = new FormControl(this.currentActivityTab);
  }

  ngOnInit(): void {
    this.comments$ = this.store.pipe(select(fromStore.allCommentsWithUser));
    this.currentUser$ = this.store.pipe(select(fromStore.selectCurrentUser));

    this.activityLabelControl.valueChanges.pipe(
      takeUntilDestroyed(this),
      tap(value => (this.currentActivityTab = value))
    ).subscribe();
  }

  onAddComment(comment: AddCommentModel): void {
    this.store.dispatch(fromStore.addComment({ comment }));
  }

}
