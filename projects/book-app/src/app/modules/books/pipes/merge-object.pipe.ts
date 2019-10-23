import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergeObject'
})
export class MergeObjectPipe implements PipeTransform {
  transform(currentObject: object, key: string, value: any): any {
    return { ...currentObject, [key]: value };
  }
}
