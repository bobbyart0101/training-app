import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-create-training-type',
    templateUrl: './create-training-type.component.html',
    styleUrls: ['./create-training-type.component.scss'],
})
export class CreateTrainingTypeComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {

    }

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel').then(() => {
            console.log('modal close');
        });
    }
}
