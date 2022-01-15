import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextareaSubmitOnEnter]'
})
export class TextareaSubmitOnEnterDirective {
  @Output() onSubmit: EventEmitter<void> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();

      this.elementRef.nativeElement.blur();

      this.onSubmit.emit();
    }
  }

}
