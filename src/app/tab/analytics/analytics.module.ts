import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticsPage } from './analytics.page';
import {TrainingChartComponent} from '../../charts/training-chart/training-chart.component';
import {ChartsModule} from 'ng2-charts';
import {TableComponent} from '../../components/table/table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: AnalyticsPage}]),
    ChartsModule,
    NgxDatatableModule
  ],
  declarations: [AnalyticsPage, TrainingChartComponent, TableComponent]
})
export class AnalyticsPageModule {}
