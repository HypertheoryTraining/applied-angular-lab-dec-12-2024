import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';
import { PrefsComponent } from './prefs.component';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PrefsComponent],
  providers: [BooksStore, BooksDataService],
  template: `
    <div className="overflow-x-auto">
      <app-prefs />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th (click)="store.sortBy('title')">Title</th>
            <th (click)="store.sortBy('author')">Author</th>
            <th (click)="store.sortBy('year')">Year</th>
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

  //   currentSortColumn = '';
  //   isSortAsc = true;

  //   sortTable(column: string) {
  //     if (this.currentSortColumn === column) {
  //       this.isSortAsc = !this.isSortAsc;
  //     } else {
  //       this.currentSortColumn = column;
  //       this.isSortAsc = false;
  //     }

  //     switch (column) {
  //       case 'Title':
  //         return this.store
  //           .books()
  //           .sort((a, b) =>
  //             this.isSortAsc
  //               ? a.title.localeCompare(b.title)
  //               : b.title.localeCompare(a.title),
  //           );
  //       case 'ID':
  //         return this.store
  //           .books()
  //           .sort((a, b) =>
  //             this.isSortAsc
  //               ? parseInt(a.id) - parseInt(b.id)
  //               : parseInt(b.id) - parseInt(a.id),
  //           );
  //       case 'Author':
  //         return this.store
  //           .books()
  //           .sort((a, b) =>
  //             this.isSortAsc
  //               ? a.author.localeCompare(b.author)
  //               : b.author.localeCompare(a.author),
  //           );
  //       case 'Year':
  //         return this.store
  //           .books()
  //           .sort((a, b) => (this.isSortAsc ? a.year - b.year : b.year - a.year));
  //       default:
  //         return undefined;
  //     }
  //   }
}
