import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DriversComponent } from '../drivers/drivers.component';
import { ProfileComponent } from './profile.component';
import { DriverNamePipe } from '../pipes/driver-name.pipe';
import { ConstructorNamePipe } from '../pipes/constructor-name.pipe';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApiResponse } from '../models/api-response.model';
import { MRData } from '../models/mrdata.model';
import { StandingsTable } from '../models/standings-table.model';
import { StandingsList } from '../models/standings-list.model';
import { DriverStanding } from '../models/driver-standing.model';
import { Driver } from '../models/driver.model';
import { Constructor } from '../models/constructor.model';
import { DriversService } from '../services/drivers.service';
import { SelectedDriverService } from '../services/selected-driver.service';
import { DriverTable } from '../models/driver-table.model';
import { Subject } from 'rxjs/Subject';


const driverMock = new Driver();
driverMock.givenName = 'Fernando';
driverMock.familyName = 'Alonso';
driverMock.driverId = 'alonso';

const getAllApiResponseMock = new ApiResponse();
getAllApiResponseMock.MRData = new MRData();
getAllApiResponseMock.MRData.DriverTable = new DriverTable();
getAllApiResponseMock.MRData.DriverTable.Drivers = [driverMock];

class DriversServiceStub {
  getById() {
    return Observable.of(getAllApiResponseMock);
  }
}

const routeParams = new Subject<any>();

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DriversComponent,
        ProfileComponent,
        DriverNamePipe,
        ConstructorNamePipe
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'drivers', component: DriversComponent },
          { path: 'profile/:id', component: ProfileComponent },
        ]),
        HttpClientTestingModule
      ],
      providers: [
        { provide: DriversService, useClass: DriversServiceStub },
        { provide: ActivatedRoute, useValue: { params: routeParams } },
        SelectedDriverService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      spyOn(component.router, 'navigate');
      spyOn(component, 'getDriver').and.callThrough();
    });

    it('should redirect to the drivers listing page, if no driver id is provided in route params', () => {
      routeParams.next({});

      component.ngOnInit();

      expect(component.router.navigate).toHaveBeenCalledWith(['/drivers']);
    });

    it('should use getDriver method, if driver id is provided in route params', () => {

      routeParams.next({ id: 'test4' });

      component.ngOnInit();

      expect(component.getDriver).toHaveBeenCalledWith('test4');
    });

  });

  describe('getDriver', () => {

    beforeEach(() => {
      spyOn(component, 'getDriverById').and.callThrough();
    });

    it('should use getDriverById, if no driver is stored in selectedDriver proxy service', fakeAsync(() => {
      component.getDriver('test4');

      flush();
      fixture.detectChanges();

      expect(component.getDriverById).toHaveBeenCalledWith('test4');
    }));

    it('should set the driver to value from selectedDriver proxy service, if one is found', fakeAsync(() => {
      component.selectedDriverService.set(driverMock);

      component.getDriver('test4');

      flush();
      fixture.detectChanges();

      expect(component.driver).toEqual(driverMock);

    }));

  });

  describe('getDriverById', () => {

    beforeEach(() => {
      spyOn(component.driversService, 'getById').and.callThrough();
    });

    it('should use DriversService to get driver by id', fakeAsync(() => {
      component.getDriverById('test4');
      expect(component.driversService.getById).toHaveBeenCalledWith('test4');

      flush();
      fixture.detectChanges();

      expect(component.driver).toEqual(driverMock);
    }));

  });

});
