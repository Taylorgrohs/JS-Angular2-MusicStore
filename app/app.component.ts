import { Component, EventEmitter } from 'angular2/core';
import { Cd } from './cd.model';
import { CdListComponent } from './cd-list.component';

@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  template: `
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>Music Store</h1>
        </div>
      </div>
    </div>
    <div class="container">
    <h2>Inventory</h2>
      <cd-list
      [cdList]="cds" (onCdSelect)="cdWasSelected($event)">
      </cd-list>
    </div>
  `
})

export class AppComponent {
  public cds: Cd[];
  constructor(){
    this.cds = [
      new Cd("Genie in a bottle", "Christina Angulara", 10, "PopRocks"),
      new Cd("Silver Side Up", "NickleBack", 0.05, "Emo-Whine"),
      new Cd("Justified", "Justin Timberlake", 15, "Pop"),
      new Cd("Hybrid Theory", "Linkin Park", 5, "Punk"),
      new Cd("Everything in Transit", "Jack's Mannequin", 13, "Alternative"),
      new Cd("The Everglow", "Mae", 9, "Indie Rock")
    ];
  }
  cdWasSelected(clickedCd: Cd): void {
    console.log('parent', clickedCd);
  }
}
