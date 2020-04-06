import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {SetModel} from '../../shared/set.model';
import {DatePipe} from '@angular/common';
import {ApiService} from '../../services/api/api.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-creating-training-set',
    templateUrl: './creating-training-set.component.html',
    styleUrls: ['./creating-training-set.component.scss'],
})
export class CreatingTrainingSetComponent implements OnInit, OnDestroy {
    private readonly currentSet: SetModel = new SetModel();
    private isEditMode = false;
    private datePipe = DatePipe;
    private type: string;
    private setId: number;
    private editSub: Subscription;
    private addSub: Subscription;

    constructor(private modalCtrl: ModalController,
                private navParams: NavParams,
                private apiService: ApiService) {
        if (navParams.get('type')) {
            this.type = navParams.get('type');
            console.log(this.type);
        }
        if (navParams.get('set')) {
            this.setId = navParams.get('set').id;
            this.currentSet = {
                weight: navParams.get('set').weight,
                times: navParams.get('set').times,
                createdDate: navParams.get('set').createdDate,
                type: navParams.get('type')
            };
            console.log(this.currentSet);
            this.isEditMode = true;
        }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.editSub) {
            this.editSub.unsubscribe();
        }
        if (this.addSub) {
            this.addSub.unsubscribe();
        }
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        console.log(this.currentSet);
        if (this.isEditMode) {
            this.editSub = this.apiService.updateTrainingSet(this.currentSet, this.setId).subscribe(() => {
                form.reset();
                this.modalCtrl.dismiss(null, 'cancel').then(() => {
                });
            });
        } else {
            this.currentSet.type = this.type;
            this.addSub = this.apiService.addTrainingSet(this.currentSet).subscribe(() => {
                form.reset();
                this.modalCtrl.dismiss(null, 'cancel').then(() => {
                });
            });
        }


    }

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel').then(() => {
            console.log('modal close');
        });
    }
}
