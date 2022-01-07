import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiline'
})
export class MultilinePipe implements PipeTransform {

  private LINE_BREAK = /\r\n?|\n/g;

  transform(value: string): string {
    return value ? value.replace(this.LINE_BREAK, '</br>') : '';
  }

}
