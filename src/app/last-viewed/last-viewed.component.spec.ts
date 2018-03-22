import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DriverNamePipe } from '../pipes/driver-name.pipe';
import { LastViewedComponent } from './last-viewed.component';
import { ProfileComponent } from '../profile/profile.component';

describe('LastViewedComponent', () => {
  let component: LastViewedComponent;
  let fixture: ComponentFixture<LastViewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DriverNamePipe,
        ProfileComponent,
        LastViewedComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'profile/:id', component: ProfileComponent }
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
