import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainingSetPage } from './training-set.page';

describe('TrainingSetPage', () => {
  let component: TrainingSetPage;
  let fixture: ComponentFixture<TrainingSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
