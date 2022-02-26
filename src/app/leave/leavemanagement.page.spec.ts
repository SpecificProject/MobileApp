import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveManagement } from './leavemanagement.page';

describe('LeaveManagement', () => {
  let component: LeaveManagement;
  let fixture: ComponentFixture<LeaveManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveManagement],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
