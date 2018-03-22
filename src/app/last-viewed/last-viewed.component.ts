import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../models/driver.model';
import { SelectedDriverService } from '../services/selected-driver.service';

@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.scss']
})
export class LastViewedComponent implements OnInit {

  @Input() drivers: Driver[];

  constructor(
    public router: Router,
    public selectedDriverService: SelectedDriverService
  ) { }

  ngOnInit() {

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
