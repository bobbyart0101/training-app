import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api/api.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-analytics',
    templateUrl: 'analytics.page.html',
    styleUrls: ['analytics.page.scss']
})
export class AnalyticsPage implements OnInit {
    @ViewChild('form', {static: true}) form: NgForm;
    trainingTypes: any;
    showChart = false;
    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.apiService.getTrainingTypes().subscribe((res) => {
            this.trainingTypes = res;
        });
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const startDate = this.form.value['start-date'].split('T')[0];
        const endDate = this.form.value['end-date'].split('T')[0];
        const type = this.form.value.type;
        this.apiService.getTrainingByDay(startDate, endDate, type).subscribe((res) => {
            this.showChart = true;
            console.log(res);
            this.apiService.searchResult.next(res);
        });
    }

    datesValid() {
        const startDate = new Date(this.form.value['start-date']);
        const endDate = new Date(this.form.value['end-date']);
        return endDate > startDate;
    }
}
