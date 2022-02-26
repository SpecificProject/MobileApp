import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateLeaveManagement } from './createleavemanagement.page';

describe('CreateLeaveManagement', () => {
  let component: CreateLeaveManagement;
  let fixture: ComponentFixture<CreateLeaveManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLeaveManagement],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLeaveManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
