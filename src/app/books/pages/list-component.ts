import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookStore } from '../services/books.store';
import { SorterComponent } from '../components/sorter.component';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SorterComponent],
  template: ` @if (store.books()) {
    <app-book-sorter />
    <div class="grid grid-cols-4 gap-8">
      @for (book of store.books(); track book.id) {
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
  store = inject(BookStore);
}
