import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubler'
})
export class DoublerPipe implements PipeTransform {

  constructor() {
    console.log('DoublerPipe constructor');
  }

  transform(value: any, args?: any): any {
    return value + value;
  }

}
