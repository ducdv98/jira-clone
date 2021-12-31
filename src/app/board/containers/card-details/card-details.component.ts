import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  columns = [
    {
      id: 'abc',
      name: 'To do'
    },
    {
      id: 'xyz',
      name: 'In progress'
    },
    {
      id: 'zua',
      name: 'Done'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
