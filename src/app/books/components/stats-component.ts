import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BookStore } from '../services/books.store';

@Component({
  selector: 'app-book-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @let stats = store.stats();
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total Books</div>
        <div class="stat-value">{{ stats.total }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Earliest Book</div>
        <div class="stat-value">{{ stats.earliest }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Most Recent Book</div>
        <div class="stat-value">{{ stats.latest }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Average Pages</div>
        <div class="stat-value">{{ stats.averagePages }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatsComponent {
  store = inject(BookStore);
}
