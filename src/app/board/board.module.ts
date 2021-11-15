import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent, containers } from './containers';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
]

@NgModule({
  declarations: [
    containers
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BoardModule {
}
