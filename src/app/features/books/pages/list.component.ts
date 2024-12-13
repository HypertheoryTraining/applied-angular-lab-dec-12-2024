import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';
import { BooksDataService } from '../services/books-data.service';
import { PrefsComponent } from './prefs.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PrefsComponent, RouterLink],
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
                <td>
                  <a [routerLink]="['..', 'details', book.id]">{{
                    book.title
                  }}</a>
                </td>
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
