import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: 'mycomp.html'
})

export class MyCompComponent {
  name = 'John doe';
  days = ['sunday', 'monday', 'tuesday'];
  isWeekend = false;
}
