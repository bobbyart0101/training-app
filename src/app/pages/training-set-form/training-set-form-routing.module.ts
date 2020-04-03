import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingSetFormPage } from './training-set-form.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingSetFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingSetFormPageRoutingModule {}
