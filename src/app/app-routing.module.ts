import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'board',
  },
  {
    path: 'board',
    component: LayoutComponent,
    loadChildren: () => import('./board/board.module').then(m => m.BoardModule)
  },
  {
    path: 'roadmap',
    component: LayoutComponent,
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },
  {
    path: 'code',
    component: LayoutComponent,
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },
  {
    path: 'shortcut',
    component: LayoutComponent,
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },
  {
    path: 'settings',
    component: LayoutComponent,
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'board',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
