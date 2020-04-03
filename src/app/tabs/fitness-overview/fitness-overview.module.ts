import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitnessOverviewPage } from './fitness-overview.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FitnessOverviewPage }])
  ],
  declarations: [FitnessOverviewPage]
})
export class FitnessOverviewPageModule {}
