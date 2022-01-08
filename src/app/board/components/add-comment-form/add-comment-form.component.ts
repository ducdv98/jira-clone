import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from '@app/core/interfaces';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.scss']
})
export class AddCommentFormComponent implements OnInit {
  @Input() user!: User | null;

  @Output() addComment = new EventEmitter();

  editMode = false;

  commentForm: FormGroup;

  constructor() {
    this.commentForm = new FormGroup({
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onAddComment(): void {
    this.editMode = false;

    this.addComment.emit({
      content: this.commentForm.value.comment,
      uid: this.user?.id
    });

    this.commentForm.reset();
  }

}
