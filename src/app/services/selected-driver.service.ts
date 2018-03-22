import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Driver } from '../models/driver.model';

@Injectable()
export class SelectedDriverService {

  private selectedDriverSource = new BehaviorSubject<Driver>(null);
  selectedDriver$ = this.selectedDriverSource.asObservable();

  set(driver: Driver) {
    this.selectedDriverSource.next(driver);
  }

}
