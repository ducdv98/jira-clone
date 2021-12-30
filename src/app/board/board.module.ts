import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { BoardContainerComponent, containers } from './containers';
import { components } from './components';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { AvatarModule } from '@app/shared/components/avatar/avatar.module';
import { AutofocusModule, TextareaSubmitOnEnterModule, ClickOutsideModule } from '@app/shared/directives';

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
    ReactiveFormsModule,
    DragDropModule,

    NzBreadCrumbModule,
    NzSelectModule,
    NzIconModule,
    NzDividerModule,

    AutofocusModule,
    AvatarModule,
    SvgIconModule,
    TextareaSubmitOnEnterModule,
    ClickOutsideModule,
  ]
})
export class BoardModule {
}
