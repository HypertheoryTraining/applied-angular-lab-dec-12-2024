import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';

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
            <th (click)="sortTable('ID')">ID</th>
            <th (click)="sortTable('Title')">Title</th>
            <th (click)="sortTable('Author')">Author</th>
            <th (click)="sortTable('Year')">Year</th>
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

  currentSortColumn = '';
  isSortAsc = true;

  sortTable(column: string) {
    if (this.currentSortColumn === column) {
      this.isSortAsc = !this.isSortAsc;
    } else {
      this.currentSortColumn = column;
      this.isSortAsc = false;
    }

    switch (column) {
      case 'Title':
        return this.store
          .books()
          .sort((a, b) =>
            this.isSortAsc
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title),
          );
      case 'ID':
        return this.store
          .books()
          .sort((a, b) =>
            this.isSortAsc
              ? parseInt(a.id) - parseInt(b.id)
              : parseInt(b.id) - parseInt(a.id),
          );
      case 'Author':
        return this.store
          .books()
          .sort((a, b) =>
            this.isSortAsc
              ? a.author.localeCompare(b.author)
              : b.author.localeCompare(a.author),
          );
      case 'Year':
        return this.store
          .books()
          .sort((a, b) => (this.isSortAsc ? a.year - b.year : b.year - a.year));
      default:
        return undefined;
    }
  }
}
