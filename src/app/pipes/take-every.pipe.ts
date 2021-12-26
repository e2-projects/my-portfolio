import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'takeEvery'
})
export class TakeEveryPipe implements PipeTransform {

  transform(elements: any[], selector: number = 1, takeFirst = true): any[] {
    let arr = [];
    if (!takeFirst) {
      elements.shift();
    }
    arr = elements.filter((value, index, array) => index % selector === 0);
    return arr;
  }

}
