import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IonItemSliding, ModalController} from '@ionic/angular';
import {take} from 'rxjs/operators';
import {CreateTrainingTypeComponent} from '../../components/create-training-type/create-training-type.component';
import {ApiService} from '../../services/api/api.service';
import {DatePipe} from '@angular/common';
import {CreatingTrainingSetComponent} from '../../components/creating-training-set/creating-training-set.component';
import {SetModel} from '../../shared/set.model';

@Component({
    selector: 'app-training-set',
    templateUrl: './training-set.page.html',
    styleUrls: ['./training-set.page.scss'],
})
export class TrainingSetPage implements OnInit {
    private id;
    private typeName;
    trainingSets: any;
    private datePipe = DatePipe;

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

    onAddSet() {
        this.modalCtrl.create({component: CreatingTrainingSetComponent, componentProps: {}}).then(modalEl => {
            modalEl.present().then();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.role);
        });
    }

    onEditSet(slidingItem: IonItemSliding, set: SetModel) {
        slidingItem.close();
        this.modalCtrl.create({component: CreatingTrainingSetComponent, componentProps: {set}}).then(modalEl => {
            modalEl.present().then();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.role);
        });
    }

    onDeleted(slidingItem: IonItemSliding,  set: SetModel) {
        slidingItem.close();
    }

    onEditTrainingType() {
        this.modalCtrl.create({
            component: CreateTrainingTypeComponent,
            componentProps: {id: this.id, typeName: this.typeName}
        }).then(modalEl => {
            modalEl.present().then();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.role);
        });
    }
}
