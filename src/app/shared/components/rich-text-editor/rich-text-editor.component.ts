import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import Quill from 'quill';

import { QuillModules } from 'ngx-quill';
import { ContentChange } from 'ngx-quill/lib/quill-editor.component';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RichTextEditorComponent),
      multi: true,
    }
  ]
})
export class RichTextEditorComponent implements OnInit, ControlValueAccessor {
  @Output() blur = new EventEmitter();

  editorControl: FormControl;

  quillConfig: QuillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      ['bold', 'italic', 'underline'],
      [{ 'color': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],

      ['blockquote', 'code-block'],

      [{ 'indent': '-1' }, { 'indent': '+1' }],

      [{ 'align': [] }],

    ]
  };

  content!: string;
  private onTouched!: Function;
  private onChanged!: Function;

  constructor() {
    this.editorControl = new FormControl();
  }

  ngOnInit(): void {
  }

  writeValue(content: string): void {
    this.editorControl.patchValue(content);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onContentChange(content: ContentChange): void {
    this.onChanged(content.html);
  }

  onFocus(): void {
    this.onTouched();
  }

  onBlur(): void {
    this.blur.emit();
  }

  editorCreated(editor: Quill): void {
    editor.focus();
  }
}
