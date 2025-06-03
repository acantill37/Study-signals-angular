import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Card, CardStore } from '../../store/cars.store';
import { CardsService } from '../../services/cards.service';

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
  selectedImage = signal<string | null>(null);
  currentSearch = signal('');
  currentFilter: WritableSignal<'name' | 'type' | 'race'> = signal('name');
  showFilteredResults = signal(false);

  constructor() {
    effect(() => {
      if (!this.showFilteredResults()) {
        this.store.loadPages(this.page());
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit() {
    this.store.loadPages(this.page());
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.currentSearch.set(input.value.trim().toLowerCase());
    this.applyFilter();
  }

  applyFilter() {
    if (!this.currentSearch()) {
      this.showFilteredResults.set(false);
      return;
    }
    this.showFilteredResults.set(true);
  }

  nextPage() {
    if (!this.showFilteredResults()) {
      this.page.update(page => page + 1);
    }
  }

  previousPage() {
    if (!this.showFilteredResults()) {
      this.page.update(page => Math.max(0, page - 1));
    }
  }

  getDisplayedCards(): Card[] {
    if (this.showFilteredResults()) {
      return this.store.cards().filter(card => {
        const filterValue = this.currentFilter();
        const cardValue = card[filterValue as keyof Card];
        return String(cardValue).toLowerCase().includes(this.currentSearch().toLowerCase());
      });
    }
    return this.store.cards();
  }

  openModal(imageUrl: string) {
    this.selectedImage.set(imageUrl);
  }

  closeModal() {
    this.selectedImage.set(null);
  }
}