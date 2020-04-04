import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FitnessOverviewPage } from './fitness-overview.page';

describe('FitnessOverviewPage', () => {
  let component: FitnessOverviewPage;
  let fixture: ComponentFixture<FitnessOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessOverviewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FitnessOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
