import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Driver } from '../models/driver.model';

@Injectable()
export class SelectedDriverService {

  private selectedDriverSource = new BehaviorSubject<Driver>(null);
  selectedDriver$ = this.selectedDriverSource.asObservable();

  set(driver: Driver) {
    this.selectedDriverSource.next(driver);
    this.saveLatest(driver);
  }

  saveLatest(driver: Driver) {
    // get what we currently have in local storage
    const viewed = localStorage.getItem('viewed');
    let drivers = [];

    if (!viewed) {
      drivers.push(driver);
    } else {
      drivers = JSON.parse(viewed);

      const inArray = drivers.find(i => {
        return i.driverId === driver.driverId;
      });

      if (!inArray) {
        drivers.push(driver);
      }
    }

    localStorage.setItem('viewed', JSON.stringify(drivers.slice(-5)));

  }

  getLatest() {
    const viewed = localStorage.getItem('viewed');
    return (viewed) ? JSON.parse(viewed) : [];
  }

}
