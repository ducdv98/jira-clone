import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { User } from '@app/core/interfaces';

@Component({
  selector: 'app-board-action',
  templateUrl: './board-action.component.html',
  styleUrls: ['./board-action.component.scss']
})
export class BoardActionComponent implements OnInit {
  @Input() users: Array<User> | null = [];

  groupByControl: FormControl;

  constructor() {
    this.groupByControl = new FormControl('None');
  }

  ngOnInit(): void {
  }

}
