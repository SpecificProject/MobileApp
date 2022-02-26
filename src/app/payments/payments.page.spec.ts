import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Payments } from './payments.page';

describe('Payments', () => {
  let component: Payments;
  let fixture: ComponentFixture<Payments>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Payments],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Payments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
