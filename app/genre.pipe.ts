import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Cd[], args) {
    console.log('selected cd: ', args[1]);
    var desiredGenre = args[0];
    return input.filter((cd) => {
      return cd.genre === desiredGenre;
    });
  }
}
