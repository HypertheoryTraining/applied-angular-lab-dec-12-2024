import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookEntity } from './types';
import { RouterLink } from '@angular/router';
import { StatsComponent } from './stats.component';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, StatsComponent],
  template: ` <button class="btn btn-info">
      <a routerLink="stats">Show Stats</a>
    </button>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Country</th>
            <th>Image Link</th>
            <th>Language</th>
            <th>Link</th>
            <th>Pages</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          @for (book of books(); track book.id) {
            <tr>
              <td>{{ book.id }}</td>
              <th>{{ book.author }}</th>
              <td>{{ book.country }}</td>
              <td>{{ book.imageLink }}</td>
              <td>{{ book.language }}</td>
              <td>{{ book.link }}</td>
              <td>{{ book.pages }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.year }}</td>
            </tr>
          } @empty {
            <p>No books to show!</p>
          }
        </tbody>
      </table>
    </div>`,
  styles: ``,
})
export class BooksListComponent {
  books = input.required<BookEntity[]>();
}
