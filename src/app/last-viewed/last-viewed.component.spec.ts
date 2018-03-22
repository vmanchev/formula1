import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectedDriverService } from '../services/selected-driver.service';
import { DriverNamePipe } from '../pipes/driver-name.pipe';
import { LastViewedComponent } from './last-viewed.component';
import { ProfileComponent } from '../profile/profile.component';
import { Driver } from '../models/driver.model';

const driverMock = new Driver();
driverMock.givenName = 'Fernando';
driverMock.familyName = 'Alonso';
driverMock.driverId = 'alonso';

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
      ],
      providers: [
        SelectedDriverService
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

  describe('goToDriver', () => {
    beforeEach(() => {
      spyOn(component.selectedDriverService, 'set').and.callThrough();
      spyOn(component.router, 'navigate');
      component.goToDriver(driverMock);
    });

    it('should save the selected driver in proxy service', () => {
      expect(component.selectedDriverService.set).toHaveBeenCalledWith(driverMock);
    });

    it('should redirect to driver profile page by driver id', () => {
      expect(component.router.navigate).toHaveBeenCalledWith(['/profile', 'alonso']);
    });
  });
});
