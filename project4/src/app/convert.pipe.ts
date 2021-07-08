import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, getCount: any) {
    if (!value) { return ''; };
    switch (getCount) {
      case 'km':
        return value * 1.60934;
      case 'cm':
        return value * 1.60934 * 1000;
      case 'm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Somthing went wrong');
    }
  }

}
