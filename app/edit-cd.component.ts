import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'edit-cd',
  inputs: ['cd'],
  template: `
  <div class="container">
    <h3>Edit CD:</h3>
    <div class="cd-form">
      <input [(ngModel)]="cd.name" class="col-sm-2 input-md cd-form"/>
      <input [(ngModel)]="cd.artist" class="col-sm-2 input-md cd-form"/>
      <input [(ngModel)]="cd.price" class="col-sm-2 input-md cd-form"/>
      <input [(ngModel)]="cd.genre" class="col-sm-2 input-md cd-form"/>
    </div>
  </div>
  `
})
export class EditCdComponent {
  public cd: Cd;
}
