import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {ApiService} from '../../services/api/api.service';
import {log} from 'util';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-create-training-type',
    templateUrl: './create-training-type.component.html',
    styleUrls: ['./create-training-type.component.scss'],
})

export class CreateTrainingTypeComponent implements OnInit, OnDestroy {
    private id: string;
    private isEditMode = false;
    private typeName;
    private editSub: Subscription;
    private addSub: Subscription;

    constructor(private modalCtrl: ModalController,
                private apiService: ApiService,
                private navParams: NavParams,
                private router: Router) {
        if (navParams.get('id') && navParams.get('typeName')) {
            this.id = navParams.get('id');
            this.typeName = navParams.get('typeName');
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
        const typeName = form.value.name;
        if (this.isEditMode) {
            this.editSub = this.apiService.updateTrainingType(this.id, typeName).subscribe(() => {
                form.reset();
                this.isEditMode = false;
                this.modalCtrl.dismiss(null, 'cancel').then(() => {
                    this.router.navigate(['tabs/fitness-overview']);
                });
            });

        } else {
            this.addSub = this.apiService.addTrainingType(typeName).subscribe(() => {
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
