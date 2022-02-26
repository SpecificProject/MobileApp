import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayTask } from './todaytask.page';

describe('TodayTask', () => {
  let component: TodayTask;
  let fixture: ComponentFixture<TodayTask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodayTask],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
