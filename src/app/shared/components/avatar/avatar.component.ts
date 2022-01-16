import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/core/interfaces';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() user!: User | null;
  @Input() size: number = 32;
  @Input() bordered: boolean = false;
  @Input() selected: boolean | undefined = false;

  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.select.emit(this.user?.id);
  }

}
