import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
     MatDatepickerModule,
     MatInputModule,
     MatNativeDateModule,
     MatFormFieldModule,
     CommonModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  bedrooms:number = 0;
  nDays:number = 0;
  guest:number = 0;

  constructor() { }

  ngOnInit() {
  }

   increment(property: 'bedrooms' | 'nDays' | 'guest') {
    this[property]++;
  }

  // ✅ Only allow 'bedrooms' | 'nDays' | 'guest' and prevent going below 0
  decrement(property: 'bedrooms' | 'nDays' | 'guest') {
    if (this[property] > 0) {
      this[property]--;
    }
  }

}
