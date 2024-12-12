import { Component, ChangeDetectionStrategy, resource } from '@angular/core';
import { BookEntity } from '../books.component';

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats">
      <div class="stat">
        <div class="stat-title">Total Number of Books</div>
        <div class="stat-value">
          {{ books.value()?.length }}
        </div>
      </div>
      <div class="stat">
        <div class="stat-title">Earliest Year Published</div>
        <div class="stat-value"></div>
      </div>
      <div class="stat">
        <div class="stat-title">Most Recent Year Published</div>
        <div class="stat-value"></div>
      </div>
      <div class="stat">
        <div class="stat-title">Average Number of Pages</div>
        <div class="stat-value"></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatsComponent {
  books = resource<BookEntity[], unknown>({
    loader: () =>
      fetch('/api/books')
        .then((res) => res.json())
        .then((r) => r.data),
  });
}
