import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { tap } from 'rxjs/operators';
import { NzSelectComponent } from 'ng-zorro-antd/select';

import { Destroyable, takeUntilDestroyed } from '@app/shared/utils';

@Destroyable()
@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss']
})
export class CardLabelComponent implements OnInit, OnChanges {
  @ViewChild('labelSelect', { static: false }) labelSelect!: NzSelectComponent;
  @Input() cardId: string = '';
  @Input() labels: Array<string> = [];
  @Input() availableLabels: Array<string> | null = [];

  @Output() updateLabels = new EventEmitter();

  editMode = false;

  labelsControl: FormControl;

  constructor() {
    this.labelsControl = new FormControl(null);
  }

  ngOnInit(): void {
    this.labelsControl.valueChanges.pipe(
      takeUntilDestroyed(this),
      tap(labels => this.updateLabels.emit({ id: this.cardId, labels }))
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const labels = changes.labels;
    if (labels && labels.currentValue !== labels.previousValue && this.labels) {
      this.labelsControl.patchValue(this.labels, { emitEvent: false });
    }
  }

  onEnableEditMode(): void {
    this.editMode = true;
    setTimeout(() => {
      this.labelSelect.focus();
    });
  }

}
