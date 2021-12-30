import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaSubmitOnEnterDirective } from './textarea-submit-on-enter.directive';



@NgModule({
  declarations: [
    TextareaSubmitOnEnterDirective
  ],
  exports: [
    TextareaSubmitOnEnterDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TextareaSubmitOnEnterModule { }
