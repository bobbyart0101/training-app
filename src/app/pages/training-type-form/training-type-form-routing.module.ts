import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingTypeFormPage } from './training-type-form.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingTypeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingTypeFormPageRoutingModule {}
