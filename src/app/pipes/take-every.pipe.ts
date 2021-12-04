import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeEvery'
})
export class TakeEveryPipe implements PipeTransform {

  transform(elements: unknown[], selector: number = 1, takeFirst = true): unknown[] {
    let arr = [];
    if (!takeFirst) {
      elements.shift();
    }
    arr = elements.filter((value, index, array) => index % selector == 0);
    return arr;
  }

}
