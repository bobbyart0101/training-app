import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-analytics',
    templateUrl: 'analytics.page.html',
    styleUrls: ['analytics.page.scss']
})
export class AnalyticsPage {
    @ViewChild('form', { static: true }) form: NgForm;
    constructor() {
    }

    onSubmit(form: NgForm) {

    }
    datesValid() {
        const startDate = new Date(this.form.value['start-date']);
        const endDate = new Date(this.form.value['end-date']);
        return endDate > startDate;
    }
}
