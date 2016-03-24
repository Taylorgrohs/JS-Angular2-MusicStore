import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { NewCdComponent } from './new-cd.component';
import { EditCdComponent } from './edit-cd.component';

@Component({
  selector: 'cd-list',
  inputs: ['cdList'],
  outputs: ['onCdSelect'],
  directives: [CdComponent, NewCdComponent, EditCdComponent],
  templateUrl: 'app/cd-list.component.html'
})
export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  cdClicked(clickedCd: Cd): void {
    console.log('child', clickedCd);
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
  createCd(holder: any): void {
    console.log(holder);
    this.cdList.push(new Cd(holder[0], holder[1], holder[2], holder[3])
    );
  }
}
