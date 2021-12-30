import { Component, Input, OnInit } from '@angular/core';
import { Card } from '@app/core/interfaces';
import { CardTypesEnum } from '@app/core/enums';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() loading: boolean = false;

  CardTypes = CardTypesEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
