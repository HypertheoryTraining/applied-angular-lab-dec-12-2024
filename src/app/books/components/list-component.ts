import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { BookEntity } from '../types';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` @if (books.hasValue()) {
    <div class="grid grid-cols-4 gap-8">
      @for (book of books.value(); track book.id) {
        <div class="card bg-base-100  shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-green-600">{{ book.title }}</h2>
            <p>{{ book.title }} is by {{ book.author }}.</p>
            <p>It was released in {{ book.year }} by {{ book.author }}</p>
          </div>
        </div>
      }
    </div>
  }`,
  styles: ``,
})
export class ListComponent {
  books = resource<BookEntity[], unknown>({
    loader: () =>
      fetch('/api/books')
        .then((r) => r.json())
        .then((r) => r.data),
  });
}
