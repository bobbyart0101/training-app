import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'training-set',
    loadChildren: () => import('./pages/training-set/training-set.module').then(m => m.TrainingSetPageModule)
  },
  {
    path: 'training-set-form',
    loadChildren: () => import('./pages/training-set-form/training-set-form.module').then(m => m.TrainingSetFormPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
