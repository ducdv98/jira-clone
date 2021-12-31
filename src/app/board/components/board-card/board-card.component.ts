import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '@app/core/interfaces';
import { CardTypesEnum } from '@app/core/enums';
import { environment } from '@app/env';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() loading: boolean = false;
  @Output() goToDetails = new EventEmitter<string>();

  CardTypes = CardTypesEnum;
  environment = environment;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.goToDetails.emit(this.card.id);
  }

}
