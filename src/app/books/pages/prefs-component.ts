import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BookStore } from '../services/books.store';

@Component({
  selector: 'app-book-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      <button
        [disabled]="store.by() === 'title'"
        (click)="store.setSortKey('title')"
        class="btn join-item"
      >
        Title
      </button>
      <button
        [disabled]="store.by() === 'author'"
        (click)="store.setSortKey('author')"
        class="btn join-item"
      >
        Author
      </button>
      <button
        [disabled]="store.by() === 'year'"
        (click)="store.setSortKey('year')"
        class="btn join-item"
      >
        Year
      </button>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(BookStore);
}
