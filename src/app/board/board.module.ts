import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BoardContainerComponent, containers } from './containers';
import { components } from './components';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { AvatarModule } from '@app/shared/components/avatar/avatar.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    component: BoardContainerComponent
  }
];

@NgModule({
  declarations: [
    containers,
    components,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzBreadCrumbModule,
    SvgIconModule,
    AvatarModule,
    NzSelectModule,
    DragDropModule,
  ]
})
export class BoardModule {
}