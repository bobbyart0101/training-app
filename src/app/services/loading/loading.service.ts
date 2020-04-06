import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private isLoading = false;

    constructor(private loadingController: LoadingController) {
    }

    async loadingPresent(message: string = null, duration: number = 100000) {
        this.isLoading = true;

        return await this.loadingController.create({
            message,
            duration
        }).then((loading) => {
            loading.present().then(() => {
                if (!this.isLoading) {
                    loading.dismiss().then();
                } else {
                    loading.onDidDismiss().then(() => this.isLoading = false);
                }
            });
        });
    }

    async loadingDismiss() {
        if (this.isLoading) {
            this.isLoading = false;
            return await this.loadingController.dismiss().then();
        }
    }
}
