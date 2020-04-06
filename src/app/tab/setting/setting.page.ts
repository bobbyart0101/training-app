import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {CreateTrainingTypeComponent} from '../../components/create-training-type/create-training-type.component';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-setting',
    templateUrl: 'setting.page.html',
    styleUrls: ['setting.page.scss']
})
export class SettingPage {

    constructor(public router: Router,
                private modalCtrl: ModalController,
                private authService: AuthService) {
    }

    onLoginOut() {
        this.authService.logout();
    }

    onCreateType() {
        this.modalCtrl.create({component: CreateTrainingTypeComponent, componentProps: {}}).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.role);
        });
    }
}
