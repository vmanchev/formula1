import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, fakeAsync, flush, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConstructorsComponent } from './constructors.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApiResponse } from '../models/api-response.model';
import { MRData } from '../models/mrdata.model';
import { ConstructorsService } from '../services/constructors.service';
import { ConstructorTable } from '../models/constructor-table.model';
import { Constructor } from '../models/constructor.model';


const constructorMock = new Constructor();
constructorMock.name = 'Ferrari';
constructorMock.constructorId = 'ferrari';
constructorMock.nationality = 'Italian';
constructorMock.url = 'http://en.wikipedia.org/wiki/Scuderia_Ferrari';

const getAllApiResponseMock = new ApiResponse();
getAllApiResponseMock.MRData = new MRData();
getAllApiResponseMock.MRData.ConstructorTable = new ConstructorTable();
getAllApiResponseMock.MRData.ConstructorTable.Constructors = [constructorMock];

class ConstructorsServiceStub {
  getAll() {
    return Observable.of(getAllApiResponseMock);
  }
}

describe('ConstructorsComponent', () => {
  let component: ConstructorsComponent;
  let fixture: ComponentFixture<ConstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructorsComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'constructors', component: ConstructorsComponent }
        ]),
        HttpClientTestingModule
      ],
      providers: [
        { provide: ConstructorsService, useClass: ConstructorsServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    beforeEach(() => {
      spyOn(component.constructorsService, 'getAll').and.callThrough();
    });

    it('should use ConstructorService to get the list of constructors', fakeAsync(() => {
      component.ngOnInit();

      expect(component.constructorsService.getAll).toHaveBeenCalled();

      flush();
      fixture.detectChanges();

      expect(component.constructors).toEqual([constructorMock]);

    }));

  });
});
