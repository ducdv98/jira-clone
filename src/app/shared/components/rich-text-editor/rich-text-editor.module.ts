import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';

import { RichTextEditorComponent } from './rich-text-editor.component';

@NgModule({
  declarations: [
    RichTextEditorComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }
