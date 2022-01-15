import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() src: string = '';
  @Input() tooltip: string = '';
  @Input() size: number = 32;
  @Input() bordered: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
