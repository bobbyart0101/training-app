import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-training-set-form',
    templateUrl: './training-set-form.page.html',
    styleUrls: ['./training-set-form.page.scss'],
})
export class TrainingSetFormPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const weight = form.value.weight;
        const time = form.value.time;
        const created = form.value.created;
        console.log(weight, time, created);
    }
}
