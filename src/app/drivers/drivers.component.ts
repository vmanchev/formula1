import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DriversService } from '../services/drivers.service';
import { SelectedDriverService } from '../services/selected-driver.service';
import { ApiResponse } from '../models/api-response.model';
import { DriverStanding } from '../models/driver-standing.model';
import { Driver } from '../models/driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  public driverStadings: DriverStanding[];

  constructor(
    public router: Router,
    public driversService: DriversService,
    public selectedDriverService: SelectedDriverService
  ) { }

  ngOnInit() {
    this.driversService.getAll().subscribe(
      (apiResponse: ApiResponse) => {
        this.driverStadings = apiResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      }
    );
  }

  /**
   * Redirect to driver profile page
   *
   * Pass driver object to a proxy service to avoid unnecessary API call.
   * Provide driverId as route parameter, in case of page refresh.
   *
   * @param driver
   */
  goToDriver(driver: Driver) {
    this.selectedDriverService.set(driver);
    this.router.navigate(['/profile', driver.driverId]);
  }

}
