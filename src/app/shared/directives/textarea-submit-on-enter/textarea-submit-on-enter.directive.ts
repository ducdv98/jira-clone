import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextareaSubmitOnEnter]'
})
export class TextareaSubmitOnEnterDirective {
  @Output() onSubmit: EventEmitter<void> = new EventEmitter();

  @HostListener('keydown', ['$event'])
  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();

      this.onSubmit.emit();
    }
  }

  constructor() {
  }

}
