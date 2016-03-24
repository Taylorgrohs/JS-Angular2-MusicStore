import { Component } from 'angular2/core';
import { Cd } from './cd.model';
@Component({
    selector: 'cd-display',
    inputs: ['cd'],
  template: `
    <ul><li>{{ cd.name }} - {{ cd.artist }}</li>
    <ul><li>Genre: {{ cd.genre }}</li>
    <li>Price: $ {{ cd.price }}</li></ul></ul>
  `
})
export class CdComponent {
  public cd: Cd;
}
