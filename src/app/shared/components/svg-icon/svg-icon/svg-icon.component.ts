import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() name: string = 'default';
  @Input() fill = 'currentColor';
  @Input() width = 16;
  @Input() height = 16;
  window: any = window;

  constructor() {
  }

  get iconUrl() {
    return `${this.window.location.href}#${this.name}`;
  }

}
