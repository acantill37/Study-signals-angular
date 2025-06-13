import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Card, CardStore } from '../../store/cars.store';
import { HeaderComponent } from '../../header/header.component';
import confetti from 'canvas-confetti';
import { CommonModule } from '@angular/common';
import Sortable from 'sortablejs';
import * as XLSX from 'xlsx';

 window.addEventListener('load', () => {
    (function () {
      const sortableLeft = document.querySelector("#hs-shared-left-sortable");
      const sortableRight = document.querySelector("#hs-shared-right-sortable");
      const options = {
        group: 'shared',
        animation: 150,
        dragClass: 'rounded-none!'
      };

      new Sortable(sortableLeft, options);
      new Sortable(sortableRight, options);
    })();
  });
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
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

  draggedItemId: number | null = null;
  dropPosition: 'above' | 'below' | null = null;
  hoveredItemId: number | null = null;

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

  exportToExcel(): void {
    const data = this.getDisplayedCards().map(card => ({
      'Nombre': card.name,
      'Tipo de carta': card.type,
      'Raza': card.race || 'N/A',
    }));

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cartas');

    XLSX.writeFile(wb, 'cartas_juego.xlsx');
  }

   launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  openModal(imageUrl: string) {
    this.selectedImage.set(imageUrl);
  }

  closeModal() {
    this.selectedImage.set(null);
  }
}