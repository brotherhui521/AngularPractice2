import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './ride';

@Pipe({
  name: 'filterRide'
})
export class FilterRidePipe implements PipeTransform {

  transform(ridesInput: Ride[], filterParam: string): any {
    switch(filterParam){
      case 'to':return ridesInput.filter(ride=>ride.destination.toLowerCase()=="gotham");
      case 'from':return ridesInput.filter(ride=>ride.pickUp.toLowerCase()=="gotham");
      case 'others':return ridesInput.filter(ride=>ride.destination.toLowerCase()!="gotham" && ride.pickUp.toLowerCase()!="gotham");
      case 'all': return ridesInput;
    }
  }

}
