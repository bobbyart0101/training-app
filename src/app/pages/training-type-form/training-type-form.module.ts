import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingTypeFormPageRoutingModule } from './training-type-form-routing.module';

import { TrainingTypeFormPage } from './training-type-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingTypeFormPageRoutingModule
  ],
  declarations: [TrainingTypeFormPage]
})
export class TrainingTypeFormPageModule {}
