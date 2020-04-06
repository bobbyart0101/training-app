import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IonItemSliding, ModalController} from '@ionic/angular';
import {take} from 'rxjs/operators';
import {CreateTrainingTypeComponent} from '../../components/create-training-type/create-training-type.component';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-training-set',
    templateUrl: './training-set.page.html',
    styleUrls: ['./training-set.page.scss'],
})
export class TrainingSetPage implements OnInit {
    private id;
    private typeName;
    trainingSets: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private modalCtrl: ModalController,
                private apiService: ApiService) {
    }

    ngOnInit() {
        this.route.params.pipe(take(1)).subscribe((params) => {
            console.log(params);
            this.id = params.id;
            this.typeName = params.name;
        });
    }

    ionViewWillEnter() {
        this.trainingSets = this.apiService.getTrainingType(this.id);
    }

    addSet() {
        this.router.navigate(['tabs/fitness-overview/training-set-update/', 'test']);
    }

    editSet(slidingItem: IonItemSliding) {
        slidingItem.close();
        this.router.navigate(['tabs/fitness-overview/training-set-update/', 'test']);
    }

    onEditTrainingType() {
        this.modalCtrl.create({component: CreateTrainingTypeComponent, componentProps: {id: this.id, typeName: this.typeName}}).then(modalEl => {
            modalEl.present().then();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.role);
        });
    }
}
