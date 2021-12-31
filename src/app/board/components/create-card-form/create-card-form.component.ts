import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from '@app/core/interfaces';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss']
})
export class CreateCardFormComponent implements OnInit {
  @Output() createCard: EventEmitter<Card> = new EventEmitter<Card>();

  cardTypes = [
    {
      label: 'TASK',
      icon: 'blueCheck'
    },
    {
      label: 'BUG',
      icon: 'bug'
    },
    {
      label: 'STORY',
      icon: 'story'
    }
  ];
  editMode = false;

  createCardForm!: FormGroup;

  get type() {
    return this.createCardForm.get('type');
  }

  constructor() {
    this.createCardForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      type: new FormControl(this.cardTypes[0].label),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.createCardForm.valid) {
      this.createCard.emit(this.createCardForm.value);
      this.createCardForm.reset({
        title: '',
        type: this.cardTypes[0].label,
      });
    }
    this.editMode = false;
  }

  onDismiss(): void {
    if (this.editMode) {
      this.editMode = false;
    }
  }
}
