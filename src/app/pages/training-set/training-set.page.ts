import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IonItemSliding} from '@ionic/angular';

@Component({
    selector: 'app-training-set',
    templateUrl: './training-set.page.html',
    styleUrls: ['./training-set.page.scss'],
})
export class TrainingSetPage implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    addSet() {
      this.router.navigate(['tabs/fitness-overview/training-set-update/', 'test' ]);
    }

    editSet(slidingItem: IonItemSliding) {
      slidingItem.close();
      this.router.navigate(['tabs/fitness-overview/training-set-update/', 'test' ]);
    }
}
