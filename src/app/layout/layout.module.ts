import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { components } from './components';
import { SvgIconModule } from '@app/shared/components/svg-icon/svg-icon.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AvatarModule } from '@app/shared/components/avatar/avatar.module';

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzDropDownModule,
    NzIconModule,
    NzToolTipModule,
    NzAvatarModule,
    NzListModule,
    NzTypographyModule,
    SvgIconModule,
    NzInputModule,
    AvatarModule
  ]
})
export class LayoutModule {
}
