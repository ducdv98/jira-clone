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
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { BoardContainerComponent, containers } from './containers';
import { components } from './components';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { AvatarModule } from '@app/shared/components/avatar/avatar.module';
import { AutofocusModule, TextareaSubmitOnEnterModule, DismissOnEscapeModule } from '@app/shared/directives';
import { InlineInputControlsModule } from '@app/shared/components/inline-input-controls/inline-input-controls.module';
import { RichTextEditorModule } from '@app/shared/components/rich-text-editor/rich-text-editor.module';
import { UnderConstructionModule } from '@app/shared/components/under-construction/under-construction.module';
import { QuillModule } from 'ngx-quill';

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
    TextFieldModule,

    NzBreadCrumbModule,
    NzSelectModule,
    NzIconModule,
    NzDividerModule,
    NzModalModule,
    NzCollapseModule,
    NzTagModule,
    NzCheckboxModule,
    NzBadgeModule,
    NzDatePickerModule,
    NzPopoverModule,
    NzToolTipModule,

    AutofocusModule,
    AvatarModule,
    SvgIconModule,
    TextareaSubmitOnEnterModule,
    DismissOnEscapeModule,
    InlineInputControlsModule,
    RichTextEditorModule,
    UnderConstructionModule,
    ContentLoaderModule,
    QuillModule,
  ]
})
export class BoardModule {
}
