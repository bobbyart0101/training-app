import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-create-training-type',
    templateUrl: './create-training-type.component.html',
    styleUrls: ['./create-training-type.component.scss'],
})
export class CreateTrainingTypeComponent implements OnInit {
    private color: string = '#127bdc';
    customAlertOptions: any = {
        header: 'Hair Color',
        subHeader: 'Select your hair color',
        message: 'Only select your dominant hair color'
    };
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
