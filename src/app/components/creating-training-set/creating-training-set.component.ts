import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {SetModel} from '../../shared/set.model';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-creating-training-set',
    templateUrl: './creating-training-set.component.html',
    styleUrls: ['./creating-training-set.component.scss'],
})
export class CreatingTrainingSetComponent implements OnInit {
  private readonly currentSet: SetModel;
  private isEditMode = false;
    private datePipe = DatePipe;
    constructor(private modalCtrl: ModalController,
                private navParams: NavParams) {
      if (navParams.get('set')) {
        this.currentSet = navParams.get('set');
        console.log(this.currentSet);
        this.isEditMode = true;
      }
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const weight = form.value.weight;
        const times = form.value.times;
        const created = form.value.created;
        console.log(weight, times, created);
    }

    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel').then(() => {
            console.log('modal close');
        });
    }
}
