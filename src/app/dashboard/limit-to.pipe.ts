import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    const arrEl=[];
    if(!value){
      return null
    }
    let limitValue = (limit)? limit : 5
    for(let i=1; i<limitValue;i++){
      arrEl.push(value[i]);
    }
    return arrEl;
  }
}
