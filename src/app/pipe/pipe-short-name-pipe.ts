import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeShortName',
})
export class PipeShortNamePipe implements PipeTransform {
  transform(fullName: string): string {
    const splittedname = fullName.trim().split(' ');
    console.log(splittedname);
    let finalName = '';
    if (splittedname.length > 1) {
      finalName = splittedname[0].charAt(0).toUpperCase() + splittedname[1];
    } else {
      finalName = splittedname[0].toUpperCase();
    }
    return finalName;
  }
}
