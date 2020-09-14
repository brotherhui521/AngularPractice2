import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './ride';
import { rides } from './rides';

@Pipe({
  name: 'sortRides'
})
export class SortRidesPipe implements PipeTransform {

  transform(inputRides: Ride[], sortParam: string): any {
    //createing a new array using the same fields using the SPREAD opertor
    return [...rides].sort((ride1,ride2)=>{
      if(ride1[sortParam]<ride2[sortParam]){
        return -1;
      }
      else if(ride1[sortParam]>ride2[sortParam]) return 1;
      else return 0;
    })
  }

}
