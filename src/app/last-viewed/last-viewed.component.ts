import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../models/driver.model';


@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.scss']
})
export class LastViewedComponent implements OnInit {

  @Input() drivers: Driver[];

  constructor() { }

  ngOnInit() {

  }

}
