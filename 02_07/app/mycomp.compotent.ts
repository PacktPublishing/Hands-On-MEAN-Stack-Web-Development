import { Component } from '@angular/core';
import { MyDays } from './mydays.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: 'mycomp.html'
})

export class MyCompComponent {
  constructor(public myDaysService: MyDays) {}
  name = 'John doe';
  days = this.myDaysService.getDays();
  isWeekend = false;
}
