import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.css']
})
export class MyBindingsComponent {
  name = '';
  @Input() newname;
  @Output() clicked = new EventEmitter();
  constructor() {
   }

   changeTheName() {
     const greeting = 'Hello, ' + this.newname;
     this.clicked.emit(greeting);
   }

}
