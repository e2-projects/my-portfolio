import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeEvery'
})
export class TakeEveryPipe implements PipeTransform {

  transform(elements: unknown[], selector = 1, takeFirst = true): unknown[] {
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
