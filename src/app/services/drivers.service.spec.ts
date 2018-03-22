import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http/src/request';

import { DriversService } from './drivers.service';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

const apiResponseMock = new ApiResponse();

describe('DriversService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DriversService]
    });
  });

  it('should be created', inject([DriversService], (service: DriversService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAll', () => {

    it('should call the api to get all drivers', inject([HttpTestingController, DriversService],
      (httpMock: HttpTestingController, service: DriversService) => {

        service.getAll().subscribe(
          success => {
            expect(success).toEqual(apiResponseMock);
          }
        );

        httpMock.expectOne((request: HttpRequest<any>) => {
          return request.method === 'GET' &&
            request.url === environment.apiUrl + '/driverStandings.json';
        }).flush(apiResponseMock);

        httpMock.verify();

      }));

  });

  describe('getById', () => {

    it('should call the api to get all drivers', inject([HttpTestingController, DriversService],
      (httpMock: HttpTestingController, service: DriversService) => {

        service.getById('test4').subscribe(
          success => {
            expect(success).toEqual(apiResponseMock);
          }
        );

        httpMock.expectOne((request: HttpRequest<any>) => {
          return request.method === 'GET' &&
            request.url === environment.apiUrl + '/drivers/test4.json';
        }).flush(apiResponseMock);

        httpMock.verify();

      }));

  });

});
