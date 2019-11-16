import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calcAverage(data) {
    var count = 0;
    var total = 0;
    data.forEach(element => {
      total += element.rating;
      count += 1;
    });
    return total/count;
  }

  getHighestRating(data) {
    var highRate = 0;
    data.forEach(element => {
      if(element.rating > highRate) {
        highRate = element.rating;
      }
    });

    return highRate;
  }

  getLowestRating(data) {
    var lowRate;
    data.forEach(element => {
      if(lowRate) {
        if(element.rating < lowRate) {
          lowRate = element.rating;
        }
      }
      else {
        lowRate = element.rating;
      }
    });
    
    return lowRate;
  }
}
