import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {environment} from '../../../environments/environment';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-training-chart',
    templateUrl: './training-chart.component.html',
    styleUrls: ['./training-chart.component.css']
})
export class TrainingChartComponent implements OnInit {
    // @Input('labels') labels: Array<any>;
    // @Input('dataSet') dataSet: Array<any>;
    primaryColor = environment.config.primaryColor;
    public lineChartData: ChartDataSets[] = [
        {data: [], label: 'Weight (kg)'},
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };
    public lineChartColors: Color[] = [
        {
            borderColor: this.primaryColor,
            backgroundColor: 'rgba(255,95,109,0.3)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
    public lineChartPlugins = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.searchResult.subscribe((res: any) => {
            this.lineChartLabels = Object.keys(res[0]);
            const chartValue: any = Object.values(res[0]);
            this.lineChartData[0].data = chartValue;
        });
    }

}
