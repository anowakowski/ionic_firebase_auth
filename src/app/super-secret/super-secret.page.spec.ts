import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperSecretPage } from './super-secret.page';

describe('SuperSecretPage', () => {
  let component: SuperSecretPage;
  let fixture: ComponentFixture<SuperSecretPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSecretPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperSecretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
