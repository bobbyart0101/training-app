import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {CreateTrainingTypeComponent} from '../components/create-training-type/create-training-type.component';
import {CreatingTrainingSetComponent} from '../components/creating-training-set/creating-training-set.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  entryComponents: [
    CreateTrainingTypeComponent, CreatingTrainingSetComponent
  ],
  declarations: [TabsPage,  CreateTrainingTypeComponent,  CreatingTrainingSetComponent]
})
export class TabsPageModule {}
