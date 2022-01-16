import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DismissOnEscapeDirective } from './dismiss-on-escape.directive';

@NgModule({
  declarations: [
    DismissOnEscapeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DismissOnEscapeDirective
  ]
})
export class DismissOnEscapeModule {
}
