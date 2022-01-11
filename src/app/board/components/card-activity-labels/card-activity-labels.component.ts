import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivityViewMode } from '@app/core/constants';

@Component({
  selector: 'app-card-activity-labels',
  templateUrl: './card-activity-labels.component.html',
  styleUrls: ['./card-activity-labels.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CardActivityLabelsComponent,
    multi: true
  }],
})
export class CardActivityLabelsComponent implements OnInit, ControlValueAccessor {
  mode: ActivityViewMode = 'comments';

  private onTouched!: Function;
  private onChanged!: Function;

  constructor() {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(mode: ActivityViewMode): void {
    this.mode = mode;
  }

  onChangeMode(mode: ActivityViewMode): void {
    this.mode = mode;
    this.onChanged(mode);
  }

}
