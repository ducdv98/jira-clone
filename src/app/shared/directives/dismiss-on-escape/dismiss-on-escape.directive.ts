import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[dismissOnEscape]'
})
export class DismissOnEscapeDirective {
  @Output() onDismiss = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onEscapeKeyDown(event: KeyboardEvent) {
    const formEditing = this.elementRef.nativeElement.classList.contains('visible');

    if (formEditing) {
      this.onDismiss.emit();
    }
  }

}
