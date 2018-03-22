import { Component, OnInit } from '@angular/core';
import { DriversService } from '../services/drivers.service';
import { ApiResponse } from '../models/api-response.model';
import { DriverStanding } from '../models/driver-standing.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  public driverStadings: DriverStanding[];

  constructor(
    public driversService: DriversService
  ) { }

  ngOnInit() {
    this.driversService.getAll().subscribe(
      (apiResponse: ApiResponse) => {
        this.driverStadings = apiResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      }
    );
  }

}
