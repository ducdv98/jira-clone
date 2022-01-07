import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PartialCard } from '@app/core/interfaces';

@Component({
  selector: 'app-card-environment',
  templateUrl: './card-environment.component.html',
  styleUrls: ['./card-environment.component.scss']
})
export class CardEnvironmentComponent implements OnInit {
  @Input() environment: string = '';
  @Input() cardId!: string;

  @Output() updateCardEnvironment = new EventEmitter();

  editMode = false;

  envForm: FormGroup;

  constructor() {
    this.envForm = new FormGroup({
      environment: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const environment = changes.environment;
    if (environment && environment.currentValue !== environment.previousValue) {
      this.envForm.patchValue({
        environment: this.environment,
      });
    }
  }

  onUpdateEnvironment(): void {
    this.editMode = false;
    const partial: PartialCard = {
      id: this.cardId,
      environment: this.envForm.value.environment
    };

    this.updateCardEnvironment.emit(partial);
  }

}
