import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { SelectedDriverService } from '../services/selected-driver.service';
import { Driver } from '../models/driver.model';
import { DriversService } from '../services/drivers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public driver: Driver;
  public latestViewed: Driver[];

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public driversService: DriversService,
    public selectedDriverService: SelectedDriverService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {

        if (!params.id) {
          this.router.navigate(['/drivers']);
        }

        this.getDriver(params.id);
      }
    );

    this.latestViewed = this.selectedDriverService.getLatest();
  }

  /**
   * Get driver profile
   *
   * Try to get the driver data from selectedDriver proxy service. If there
   * is nothing, (e.g. user has refreshed the page), call the API
   *
   * @param driverId
   */
  getDriver(driverId) {

    this.selectedDriverService.selectedDriver$.subscribe(
      driver => {
        if (!driver) {
          this.getDriverById(driverId);
        } else {
          this.driver = driver;
        }
      }
    );
  }

  /**
   * Get user by id from API
   *
   * This method is in use only if the user refresh the page
   *
   * @param driverId
   */
  getDriverById(driverId: string) {

    this.blockUI.start();

    this.driversService.getById(driverId).subscribe(
      result => {
        this.driver = result.MRData.DriverTable.Drivers[0];
        this.blockUI.stop();
      }
    );
  }

}
