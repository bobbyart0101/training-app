import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'fitness-overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./fitness-overview/fitness-overview.module').then(m => m.FitnessOverviewPageModule)
          },
          {
            path: 'training-set/:id',
            loadChildren: () =>
                import('../pages/training-set/training-set.module').then(m => m.TrainingSetPageModule)
          },
          {
            path: 'training-set-update/:id',
            loadChildren: () =>
                import('../pages/training-set-form/training-set-form.module').then(m => m.TrainingSetFormPageModule)
          }
        ]
      },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./analytics/analytics.module').then(m => m.AnalyticsPageModule)
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./setting/setting.module').then(m => m.SettingPageModule)
          },
          {
            path: 'training-type',
            loadChildren: () =>
                import('../pages/training-type-form/training-type-form.module').then(m => m.TrainingTypeFormPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/fitness-overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/fitness-overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
