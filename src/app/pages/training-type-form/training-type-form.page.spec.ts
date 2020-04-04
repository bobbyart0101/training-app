import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainingTypeFormPage } from './training-type-form.page';

describe('TrainingTypeFormPage', () => {
  let component: TrainingTypeFormPage;
  let fixture: ComponentFixture<TrainingTypeFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingTypeFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingTypeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
