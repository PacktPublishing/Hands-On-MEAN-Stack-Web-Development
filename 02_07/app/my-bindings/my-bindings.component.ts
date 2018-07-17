import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyDays } from '../mydays.service';

@Component({
  selector: 'app-my-bindings',
  templateUrl: './my-bindings.component.html',
  styleUrls: ['./my-bindings.component.css']
})
export class MyBindingsComponent {
  name = '';
  @Input() newname;
  @Output() clicked = new EventEmitter();
  constructor(public myDaysService: MyDays) {}

   changeTheName() {
     const greeting = 'Hello, ' + this.newname;
     this.clicked.emit(greeting);
   }

}
