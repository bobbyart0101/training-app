import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingSetFormPageRoutingModule } from './training-set-form-routing.module';

import { TrainingSetFormPage } from './training-set-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingSetFormPageRoutingModule
  ],
  declarations: [TrainingSetFormPage]
})
export class TrainingSetFormPageModule {}
