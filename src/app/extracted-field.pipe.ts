import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './ride';

@Pipe({
  name: 'extractedField'
})
export class ExtractedFieldPipe implements PipeTransform {

  transform(input: Ride[], field: string): Array<String|number> {
    //iterate over the array and only extract the field mentioned in the field argument
    
    return input.map(ride=>ride[field]);
  }

}
