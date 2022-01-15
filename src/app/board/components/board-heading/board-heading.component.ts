import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-heading',
  templateUrl: './board-heading.component.html',
  styleUrls: ['./board-heading.component.scss']
})
export class BoardHeadingComponent implements OnInit {

  contextMenuVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onContextMenuClick(): void {
    this.contextMenuVisible = false;
  }

}
