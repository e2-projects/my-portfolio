import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeEvery'
})
export class TakeEveryPipe implements PipeTransform {

  /* eslint-disable @typescript-eslint/no-explicit-any */
  transform(elements: any[], selector = 1, takeFirst = true): any[] {
    let arr = [];
    if (elements && elements.length > 0) {
      if (!takeFirst) {
        elements.shift();
      }
      arr = elements.filter((value, index) => index % selector === 0);
    }
    return arr;
  }

}
