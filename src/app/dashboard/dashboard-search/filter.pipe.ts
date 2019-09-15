import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    const filterArr=[];
    if(value === null){
      return value;
    }
    else{
      for(let item of value){
          if( item.name === filterString){
            filterArr.push(item);
          }
      }
    }
    return filterArr;
  }
}
