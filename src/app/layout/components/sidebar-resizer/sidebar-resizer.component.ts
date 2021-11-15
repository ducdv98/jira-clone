import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-resizer',
  templateUrl: './sidebar-resizer.component.html',
  styleUrls: ['./sidebar-resizer.component.scss']
})
export class SidebarResizerComponent implements OnInit {
  @Input() collapsed: boolean = true;
  @Output() onToggleSidebar: EventEmitter<any> = new EventEmitter();

  focused: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.onToggleSidebar.emit();
  }

  onHoverResizer(hovered: boolean): void {
    this.focused = hovered;
  }

}
