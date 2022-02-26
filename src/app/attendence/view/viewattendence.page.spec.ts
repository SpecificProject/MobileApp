import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiaryManagement } from './diarymanagement.page';

describe('DiaryManagement', () => {
  let component: DiaryManagement;
  let fixture: ComponentFixture<DiaryManagement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryManagement],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiaryManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
