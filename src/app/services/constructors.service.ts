import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiResponse } from '../models/api-response.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstructorsService {

  private environment: any = environment;

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.environment.apiUrl}/constructors.json`);
  }

}
