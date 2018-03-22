import { Constructor } from './constructor.model';
import { Driver } from './driver.model';

export class DriverStanding {
  Constructors: Constructor[];
  Driver: Driver;
  points: number;
  position: number;
  positionText: number;
  wins: number;
}
