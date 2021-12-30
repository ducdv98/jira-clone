import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AutofocusDirective
  ],
  exports: [
    AutofocusDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AutofocusModule {
}
