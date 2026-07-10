import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertpipe',
})
export class CovertpipePipe implements PipeTransform {
  transform(amount: number, rate: number): number {

    return amount * rate;
  }
}
