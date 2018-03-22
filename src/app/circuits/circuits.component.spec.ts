import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CircuitsComponent } from './circuits.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApiResponse } from '../models/api-response.model';
import { MRData } from '../models/mrdata.model';
import { CircuitsService } from '../services/circuits.service';
import { CircuitTable } from '../models/circuit-table.model';
import { Circuit } from '../models/circuit.model';
import { Location } from '../models/location.model';
import { CircuitLocalityPipe } from '../pipes/circuit-locality.pipe';

const location = new Location();
location.country = 'Australia';
location.lat = -37.8497;
location.locality = 'Melbourne';
location.long = 144.968;


const circuitMock = new Circuit();
circuitMock.circuitId = 'albert_park';
circuitMock.circuitName = 'Albert Park Grand Prix Circuit';
circuitMock.url = 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit';
circuitMock.Location = location;

const getAllApiResponseMock = new ApiResponse();
getAllApiResponseMock.MRData = new MRData();
getAllApiResponseMock.MRData.CircuitTable = new CircuitTable();
getAllApiResponseMock.MRData.CircuitTable.Circuits = [circuitMock];

class CircuitsServiceStub {
  getAll() {
    return Observable.of(getAllApiResponseMock);
  }
}

describe('CircuitsComponent', () => {
  let component: CircuitsComponent;
  let fixture: ComponentFixture<CircuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CircuitsComponent,
        CircuitLocalityPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'Circuits', component: CircuitsComponent }
        ]),
        HttpClientTestingModule
      ],
      providers: [
        { provide: CircuitsService, useClass: CircuitsServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    beforeEach(() => {
      spyOn(component.circuitsService, 'getAll').and.callThrough();
    });

    it('should use Circuitservice to get the list of Circuits', fakeAsync(() => {
      component.ngOnInit();

      expect(component.circuitsService.getAll).toHaveBeenCalled();

      flush();
      fixture.detectChanges();

      expect(component.circuits).toEqual([circuitMock]);

    }));

  });
});
