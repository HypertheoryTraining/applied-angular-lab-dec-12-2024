import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [BooksStore, BooksDataService],
  template: `
    <div class="stats">
      <div class="stat">
        <div class="stat-title">Total Number of Books</div>
        <div class="stat-value">
          {{ store.booksTotal() }}
        </div>
      </div>
      <div class="stat">
        <div class="stat-title">Earliest Year Published</div>
        <div class="stat-value">{{ store.earliestYearPublished() }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Most Recent Year Published</div>
        <div class="stat-value">{{ store.mostRecentYearPublished() }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Average Number of Pages</div>
        <div class="stat-value">{{ store.averageNumberOfPages() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatsComponent {
  store = inject(BooksStore);
}
