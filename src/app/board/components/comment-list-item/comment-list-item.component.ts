import { Component, Input, OnInit } from '@angular/core';
import { CommentWithUser } from '@app/core/interfaces';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {
  @Input() comment!: CommentWithUser;

  constructor() { }

  ngOnInit(): void {
  }

}
