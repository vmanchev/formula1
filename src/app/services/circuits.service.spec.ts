import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http/src/request';

import { CircuitsService } from './circuits.service';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

const apiResponseMock = new ApiResponse();

describe('CircuitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CircuitsService]
    });
  });

  it('should be created', inject([CircuitsService], (service: CircuitsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAll', () => {

    it('should call the api to get all circuits', inject([HttpTestingController, CircuitsService],
      (httpMock: HttpTestingController, service: CircuitsService) => {

        service.getAll().subscribe(
          success => {
            expect(success).toEqual(apiResponseMock);
          }
        );

        httpMock.expectOne((request: HttpRequest<any>) => {
          return request.method === 'GET' &&
            request.url === environment.apiUrl + '/circuits.json';
        }).flush(apiResponseMock);

        httpMock.verify();

      }));

  });
});
