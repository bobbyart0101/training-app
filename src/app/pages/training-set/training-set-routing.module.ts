import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingSetPage } from './training-set.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingSetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingSetPageRoutingModule {}
