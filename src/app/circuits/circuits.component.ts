import { Component, OnInit } from '@angular/core';
import { CircuitsService } from '../services/circuits.service';
import { Circuit } from '../models/circuit.model';
import { ApiResponse } from '../models/api-response.model';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {

  public circuits: Circuit[];

  constructor(
    public circuitsService: CircuitsService
  ) { }

  ngOnInit() {
    this.circuitsService.getAll().subscribe(
      (apiResponse: ApiResponse) => {
        this.circuits = apiResponse.MRData.CircuitTable.Circuits;
      }
    );
  }

}
