import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  topbarMenuItems = [
    { name: 'Your work', selected: false },
    { name: 'Projects', selected: true },
    { name: 'Filters', selected: false },
    { name: 'Dashboards', selected: false },
    { name: 'People', selected: false },
    { name: 'Plans', selected: false },
    { name: 'Apps', selected: false },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
