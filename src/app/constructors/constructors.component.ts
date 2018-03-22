import { Component, OnInit } from '@angular/core';
import { ConstructorsService } from '../services/constructors.service';
import { Constructor } from '../models/constructor.model';
import { ApiResponse } from '../models/api-response.model';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {

  public constructors: Constructor[];

  constructor(
    public constructorsService: ConstructorsService
  ) { }

  ngOnInit() {
    this.constructorsService.getAll().subscribe(
      (apiResponse: ApiResponse) => {
        this.constructors = apiResponse.MRData.ConstructorTable.Constructors;
      }
    );
  }

}
