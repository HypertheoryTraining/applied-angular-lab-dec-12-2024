import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';

// type BookApiResponse = {
//   data: BookEntity[];
// };

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  providers: [BooksStore, BooksDataService],
  template: `
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          @if (store.books()) {
            @for (book of store.books(); track book.id) {
              <tr>
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.year }}</td>
              </tr>
            }
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class ListComponent {
  store = inject(BooksStore);
}