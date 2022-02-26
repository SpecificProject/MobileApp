import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLeaveManagement } from './editleavemanagement.page';

describe('EditLeaveManagement', () => {
  let component: EditLeaveManagement;
  let fixture: ComponentFixture<EditLeaveManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditLeaveManagement],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLeaveManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
