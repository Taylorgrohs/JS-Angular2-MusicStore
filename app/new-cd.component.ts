import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
  selector: 'new-cd',
  outputs: ['onSubmitNewCd'],
  template: `
    <div class="cd-form cd-create">
      <h3>Add a new CD</h3>
      <input placeholder="Album Name" class="input-md" #newName>
      <input placeholder="Artist Name" class="input-md" #newArtist>
      <input placeholder="Price" class="input-md" #newPrice>
      <input placeholder="Genre" class="input-md" #newGenre>
      <button (click)="addCd(newName, newArtist, newPrice, newGenre)" class="btn-default btn-lg add-button">Add</button>
    </div>
    `
})
export class NewCdComponent {
  public onSubmitNewCd: EventEmitter<any>;
  constructor(){
    this.onSubmitNewCd = new EventEmitter();
  }
  addCd(userName: HTMLInputElement, userArtist: HTMLInputElement, userPrice: HTMLInputElement, userGenre: HTMLInputElement){
    var holder = [userName.value, userArtist.value, userPrice.value, userGenre.value];
    this.onSubmitNewCd.emit(holder);
    userName.value = "";
    userArtist.value = "";
    userPrice.value = "";
    userGenre.value = "";
  }
}
