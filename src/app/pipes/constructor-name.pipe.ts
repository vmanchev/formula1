import { Pipe, PipeTransform } from '@angular/core';
import { Constructor } from '../models/constructor.model';

@Pipe({
  name: 'constructorName'
})
export class ConstructorNamePipe implements PipeTransform {

  transform(value: Constructor | Constructor[], args?: any): any {

    if (Array.isArray(value)) {

      const names = [];

      value.map((constructor: Constructor) => {
        names.push(constructor.name);
      });

      return names.join(', ');
    }

    return value.name;

  }

}
