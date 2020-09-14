import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractId'
})
export class ExtractIdPipe implements PipeTransform {

  transform(input: any, ...args: any[]): any {
    return null;
  }

}
