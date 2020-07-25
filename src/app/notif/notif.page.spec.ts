import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifPage } from './notif.page';

describe('NotifPage', () => {
  let component: NotifPage;
  let fixture: ComponentFixture<NotifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
