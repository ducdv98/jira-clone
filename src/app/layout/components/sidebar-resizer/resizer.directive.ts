import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizer]'
})
export class ResizerDirective {
  @Output() onHoverResizer: EventEmitter<boolean> = new EventEmitter();
  @Output() onToggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.onHoverResizer.emit(true);
  }

  @HostListener('mouseout') onMouseOut() {
    this.onHoverResizer.emit(false);
  }

  @HostListener('click') onClick() {
    this.onToggleSidebar.emit();
  }
}
