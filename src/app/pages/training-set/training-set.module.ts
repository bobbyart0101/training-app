import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingSetPageRoutingModule } from './training-set-routing.module';

import { TrainingSetPage } from './training-set.page';
import {PipesModule} from '../../shared/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingSetPageRoutingModule,
    PipesModule
  ],
  declarations: [TrainingSetPage]
})
export class TrainingSetPageModule {}
