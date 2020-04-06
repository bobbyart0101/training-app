import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-fitness-overview',
    templateUrl: 'fitness-overview.page.html',
    styleUrls: ['fitness-overview.page.scss']
})
export class FitnessOverviewPage implements OnInit {

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.apiService.getTrainingType().subscribe((res) => {
            console.log(res);
        });
    }
}
