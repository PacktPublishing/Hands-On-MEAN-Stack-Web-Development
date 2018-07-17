import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.css']
})
export class MyBindingsComponent {
  name = '';
  constructor() {
    this.name = 'John';
   }

   changeTheName() {
    this.name = 'John Doe';
   }

}
