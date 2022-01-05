import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { BoardContainerComponent, containers } from './containers';
import { components } from './components';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { AvatarModule } from '@app/shared/components/avatar/avatar.module';
import { AutofocusModule, TextareaSubmitOnEnterModule, ClickOutsideModule } from '@app/shared/directives';
import { InlineInputControlsModule } from '@app/shared/components/inline-input-controls/inline-input-controls.module';
import { CardLabelComponent } from './components/card-label/card-label.component';
import { NzTagModule } from 'ng-zorro-antd/tag';

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
    CardLabelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DragDropModule,
    TextFieldModule,

    NzBreadCrumbModule,
    NzSelectModule,
    NzIconModule,
    NzDividerModule,
    NzModalModule,
    NzCollapseModule,

    AutofocusModule,
    AvatarModule,
    SvgIconModule,
    TextareaSubmitOnEnterModule,
    ClickOutsideModule,
    InlineInputControlsModule,
    NzTagModule,
  ]
})
export class BoardModule {
}
