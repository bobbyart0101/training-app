import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTrainingTypeComponent } from './create-training-type.component';

describe('CreateTrainingTypeComponent', () => {
  let component: CreateTrainingTypeComponent;
  let fixture: ComponentFixture<CreateTrainingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrainingTypeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTrainingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
