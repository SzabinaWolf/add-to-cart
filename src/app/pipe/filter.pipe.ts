import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterProducts: string, propName: string): any[] {
    const result: any= [];

    if(!value || filterProducts === '' || propName === ''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterProducts.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
