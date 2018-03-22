import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/driver.model';
@Pipe({
  name: 'driverName'
})
export class DriverNamePipe implements PipeTransform {

  transform(value: Driver, args?: any): any {
    return value.givenName + ' ' + value.familyName;
  }

}
