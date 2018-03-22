import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DriversComponent } from './drivers.component';
import { ProfileComponent } from '../profile/profile.component';
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



const driverMock = new Driver();
driverMock.givenName = 'John';
driverMock.familyName = 'Doe';
driverMock.driverId = 'johndoe';

const constructorMock = new Constructor();
constructorMock.name = 'Mercedes';

const driverStanding = new DriverStanding();
driverStanding.points = 100;
driverStanding.position = 2;
driverStanding.wins = 31;
driverStanding.Driver = driverMock;
driverStanding.Constructors = [constructorMock];

const standingsList = new StandingsList();
standingsList.DriverStandings = [driverStanding];

const getAllApiResponseMock = new ApiResponse();
getAllApiResponseMock.MRData = new MRData();
getAllApiResponseMock.MRData.StandingsTable = new StandingsTable();
getAllApiResponseMock.MRData.StandingsTable.StandingsLists = [standingsList];

class DriversServiceStub {
  getAll() {
    return Observable.of(getAllApiResponseMock);
  }

  getById() {
    return Observable.of();
  }
}

describe('DriversComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;

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
        { provide: DriversService, useClass: DriversServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      spyOn(component.driversService, 'getAll').and.callThrough();
      spyOn(component.driversService, 'getById').and.callThrough();
    });

    it('should use DriversService to get all drivers', fakeAsync(() => {
      component.ngOnInit();
      expect(component.driversService.getAll).toHaveBeenCalled();

      flush();
      fixture.detectChanges();

      expect(component.driverStadings).toEqual([driverStanding]);
    }));

  });

});
