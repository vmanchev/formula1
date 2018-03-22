import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http/src/request';

import { ConstructorsService } from './constructors.service';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

const apiResponseMock = new ApiResponse();

describe('ConstructorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConstructorsService]
    });
  });

  it('should be created', inject([ConstructorsService], (service: ConstructorsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAll', () => {

    it('should call the api to get all drivers', inject([HttpTestingController, ConstructorsService],
      (httpMock: HttpTestingController, service: ConstructorsService) => {

        service.getAll().subscribe(
          success => {
            expect(success).toEqual(apiResponseMock);
          }
        );

        httpMock.expectOne((request: HttpRequest<any>) => {
          return request.method === 'GET' &&
            request.url === environment.apiUrl + '/constructors.json';
        }).flush(apiResponseMock);

        httpMock.verify();

      }));

  });
});
