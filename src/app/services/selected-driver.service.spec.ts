import { TestBed, inject } from '@angular/core/testing';

import { SelectedDriverService } from './selected-driver.service';
import { Driver } from '../models/driver.model';

describe('SelectedDriverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedDriverService]
    });
  });

  it('should be created', inject([SelectedDriverService], (service: SelectedDriverService) => {
    expect(service).toBeTruthy();
  }));

  describe('saveLatest', () => {
    it('should save the first item if there was no previously viewed drivers',
      inject([SelectedDriverService], (service: SelectedDriverService) => {
        localStorage.removeItem('viewed');

        const driver1 = new Driver();
        driver1.driverId = 'hamilton';

        service.saveLatest(driver1);

        expect(service.getLatest()).toEqual([{ driverId: 'hamilton' }]);
      }));

    it('should should add one more driver to the storage, if there any  previously viewed drivers',
      inject([SelectedDriverService], (service: SelectedDriverService) => {

        localStorage.removeItem('viewed');
        localStorage.setItem('viewed', JSON.stringify([{ driverId: 'hamilton' }]));

        const driver2 = new Driver();
        driver2.driverId = 'alonso';

        service.saveLatest(driver2);

        expect(service.getLatest()).toEqual([{ driverId: 'hamilton' }, { driverId: 'alonso' }]);
      }));
  });

  describe('getLatest', () => {

    beforeEach(() => {
      localStorage.removeItem('viewed');
    });

    it('should return an empty array when no driver profiles were previously reviewed',
      inject([SelectedDriverService], (service: SelectedDriverService) => {
        expect(service.getLatest()).toEqual([]);
      }));

    it('should return list of previously viewed drivers',
      inject([SelectedDriverService], (service: SelectedDriverService) => {

        const driver1 = new Driver();
        driver1.driverId = 'hamilton';

        const driver2 = new Driver();
        driver2.driverId = 'alonso';

        localStorage.setItem('viewed', JSON.stringify([driver1, driver2]));

        expect(service.getLatest()).toEqual([{ driverId: 'hamilton' }, { driverId: 'alonso' }]);
      }));

  });
});
