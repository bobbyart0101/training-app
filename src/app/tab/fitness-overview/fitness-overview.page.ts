import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading/loading.service';
import {$animations} from '../../animations/fade.animation';

@Component({
    selector: 'app-fitness-overview',
    templateUrl: 'fitness-overview.page.html',
    styleUrls: ['fitness-overview.page.scss'],
    animations: $animations
})
export class FitnessOverviewPage implements OnInit {
    trainingTypes: any;

    constructor(private apiService: ApiService, private router: Router) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.trainingTypes = this.apiService.getTrainingTypes();
    }

    onSelectedType(id: any, name: any) {
        this.router.navigate(['tabs/fitness-overview/training-set/', id, name]);
    }
}
