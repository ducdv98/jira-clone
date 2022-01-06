import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartialCard } from '@app/core/interfaces';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss']
})
export class CardDescriptionComponent implements OnInit, OnChanges {
  @Input() description: string = '';
  @Input() cardId!: string;

  @Output() updateDescription = new EventEmitter();

  editMode = false;

  descriptionForm: FormGroup;

  constructor() {
    this.descriptionForm = new FormGroup({
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const description = changes.description;
    if (description && description.currentValue !== description.previousValue) {
      this.descriptionForm.patchValue({
        description: this.description,
      });
    }
  }

  onUpdateDescription(): void {
    this.editMode = false;
    const partial: PartialCard = {
      id: this.cardId,
      description: this.descriptionForm.value.description
    };

    this.updateDescription.emit(partial);
  }

}
