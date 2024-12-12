import { ChangeDetectionStrategy, Component } from '@angular/core';
import books from '../../../mocks/books';
import { BooksListComponent } from './list.component';
import { BookEntity } from './types';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BooksListComponent, RouterOutlet],
  template: ` <router-outlet></router-outlet>
    <app-books-list [books]="books"></app-books-list>`,
  styles: ``,
})
export class BooksComponent {
  //   books = resource<BookApiResponse, unknown>({
  //     loader: () =>
  //       fetch('/api/books')
  //         .then((res) => res.json())
  //         .then((r) => r.data()),
  //   });

  books = books as BookEntity[];
}
