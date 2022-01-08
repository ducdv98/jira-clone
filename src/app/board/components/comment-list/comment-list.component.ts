import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AddCommentModel, CommentWithUser, User } from '@app/core/interfaces';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: Array<CommentWithUser> | null = [];
  @Input() currentUser!: User | null;

  @Output() addComment = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddComment(comment: AddCommentModel): void {
    this.addComment.emit(comment);
  }

}
