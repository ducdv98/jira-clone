import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() cardId: string = '';
  @Output() onUpdateTitle = new EventEmitter();

  titleControl!: FormControl;

  constructor() {
    this.titleControl = new FormControl('');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const title = changes.title;
    if (title.currentValue !== title.previousValue) {
      this.titleControl.patchValue(this.title);
    }
  }

  onSubmit(): void {
    this.onUpdateTitle.emit({
      id: this.cardId,
      title: this.titleControl.value
    });
  }

  onCancel(): void {
    this.titleControl.patchValue(this.title);

    this.onUpdateTitle.emit({
      id: this.cardId,
      title: this.title
    });
  }

}
