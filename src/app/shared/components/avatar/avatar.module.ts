import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    NzToolTipModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule {
}
