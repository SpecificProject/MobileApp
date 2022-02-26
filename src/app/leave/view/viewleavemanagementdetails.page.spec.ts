import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLeaveManagement } from './viewleavemanagement.page';

describe('ViewLeaveManagement', () => {
  let component: ViewLeaveManagement;
  let fixture: ComponentFixture<ViewLeaveManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLeaveManagement],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLeaveManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
