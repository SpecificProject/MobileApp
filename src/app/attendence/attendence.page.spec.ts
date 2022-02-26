import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Attendence } from './attendence.page';

describe('Attendence', () => {
  let component: Attendence;
  let fixture: ComponentFixture<Attendence>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Attendence],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Attendence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
