import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    console.log('path: ' + path);
    return path ? path : 'Cat03.jpg';
  }
}
