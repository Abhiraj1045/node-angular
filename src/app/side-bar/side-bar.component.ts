import { Component, Input} from '@angular/core';

@ Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor() { }

  @Input()
  isClosed = false;


}
