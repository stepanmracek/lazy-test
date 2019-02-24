import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  value = 0;

  constructor() {
    console.log('constructing counter service');
  }
}
