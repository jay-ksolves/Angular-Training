import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatelongtext',
})
export class TruncatelongtextPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.slice(0, limit) + '...';
    }
    return value;
  }
}
