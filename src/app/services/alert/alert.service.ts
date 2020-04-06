import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }
  async presentAlert(error: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: error,
      buttons: ['OK']
    });

    await alert.present();
  }
}
