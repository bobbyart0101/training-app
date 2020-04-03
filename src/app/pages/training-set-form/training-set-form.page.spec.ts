import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainingSetFormPage } from './training-set-form.page';

describe('TrainingSetFormPage', () => {
  let component: TrainingSetFormPage;
  let fixture: ComponentFixture<TrainingSetFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingSetFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
