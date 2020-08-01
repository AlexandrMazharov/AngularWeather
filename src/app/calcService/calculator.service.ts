import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public CelsiusЕoFahrenheit( num : number){
    // (0 °C × 9/5) + 32 = 32 °F
    return ( num*9/5)+32;
  }
  constructor() { }
}
