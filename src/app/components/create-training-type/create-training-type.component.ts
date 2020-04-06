import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-create-training-type',
    templateUrl: './create-training-type.component.html',
    styleUrls: ['./create-training-type.component.scss'],
})
export class CreateTrainingTypeComponent implements OnInit {
    constructor(private modalCtrl: ModalController, private apiService: ApiService) {
    }


    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const typeName = form.value.name;
        this.apiService.addTrainingType(typeName).subscribe((res) => {
            form.reset();
            this.modalCtrl.dismiss(null, 'cancel').then(() => {
            });
        });
    }

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel').then(() => {
            console.log('modal close');
        });
    }
}
