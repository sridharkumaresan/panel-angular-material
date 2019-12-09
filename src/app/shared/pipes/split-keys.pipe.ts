import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitKeys'
})
export class SplitKeysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Object.keys(value) || [];
  }

}
