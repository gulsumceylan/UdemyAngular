import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltering'
})
export class MyFilteringPipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): string[] {

    let result : any[] =[];
    value.forEach(element=>{
      const isExsistLetter = element.includes(args[0].toString());
      if (isExsistLetter) {
        result.push(element);
      }
    })
    return result;
  }

}
