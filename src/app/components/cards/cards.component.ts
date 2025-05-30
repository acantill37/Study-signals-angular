import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CardStore } from '../../store/cars.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  readonly store = inject(CardStore);
  page = signal(0);

  constructor() {
    effect(() => {
      this.store.loadPages(this.page())
    },
      { allowSignalWrites: true })
  }

  ngOnInit() {
    this.store.loadPages(this.page());
  }

  nextPagee(){
    this.page.update((page) => page + 1);
    // this.store.loadPages(this.page());
  }

}
