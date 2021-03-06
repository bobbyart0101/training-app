import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

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
                            import('../tab/fitness-overview/fitness-overview.module').then(m => m.FitnessOverviewPageModule)
                    },
                    {
                        path: 'training-set/:id/:name',
                        loadChildren: () =>
                            import('../pages/training-set/training-set.module').then(m => m.TrainingSetPageModule)
                    }
                ]
            },
            {
                path: 'analytics',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab/analytics/analytics.module').then(m => m.AnalyticsPageModule)
                    }
                ]
            },
            {
                path: 'setting',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab/setting/setting.module').then(m => m.SettingPageModule)
                    }
                ]
            },
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
export class TabsPageRoutingModule {
}
