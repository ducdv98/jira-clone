import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-type-filter-control',
  templateUrl: './type-filter-control.component.html',
  styleUrls: ['./type-filter-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeFilterControlComponent),
    multi: true,
  }]
})
export class TypeFilterControlComponent implements OnInit, ControlValueAccessor {
  cardTypes = [
    {
      label: 'TASK',
      icon: 'blueCheck'
    },
    {
      label: 'BUG',
      icon: 'bug'
    },
  ];

  contextMenuVisible = false;

  selectedTypes: Array<string> = [];

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

  writeValue(selectedTypes: Array<string>): void {
    this.selectedTypes = [...selectedTypes];
  }

  onChangeFilter(selected: boolean, type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(l => l !== type);
    } else {
      this.selectedTypes = [...this.selectedTypes, type];
    }

    this.onChanged(this.selectedTypes);
  }

}
