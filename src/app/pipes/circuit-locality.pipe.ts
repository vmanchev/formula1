import { Pipe, PipeTransform } from '@angular/core';
import { Circuit } from '../models/circuit.model';

@Pipe({
  name: 'circuitLocality'
})
export class CircuitLocalityPipe implements PipeTransform {

  transform(value: Circuit, args?: any): any {
    return (value && value.Location) ?
      value.Location.locality + ', ' + value.Location.country : null;
  }

}
