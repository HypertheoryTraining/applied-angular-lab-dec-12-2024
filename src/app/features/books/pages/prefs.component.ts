import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [BooksStore, BooksDataService],
  template: `
    @for (val of store.byValues(); track val) {
      <button
        (click)="store.sortBy(val)"
        [disabled]="store.by() === val"
        class="btn"
      >
        Sort By {{ val }}
      </button>
    }
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(BooksStore);
}
