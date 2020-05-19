import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CreatingTrainingSetComponent} from './creating-training-set.component';

describe('CreatingTrainingSetComponent', () => {
    let component: CreatingTrainingSetComponent;
    let fixture: ComponentFixture<CreatingTrainingSetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatingTrainingSetComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CreatingTrainingSetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
