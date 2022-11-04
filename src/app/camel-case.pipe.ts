import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let result = '';

    for (let v of values) {
      result += `${this.capitalize(v)} `;
    }

    return result;
  }

  capitalize(word: string) {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
