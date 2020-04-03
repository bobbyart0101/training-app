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
              import('../fitness-overview/fitness-overview.module').then(m => m.FitnessOverviewPageModule)
          }
        ]
      },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../analytics/analytics.module').then(m => m.AnalyticsPageModule)
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../setting/setting.module').then(m => m.SettingPageModule)
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
