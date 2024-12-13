import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../services/books.store';

@Component({
  selector: 'app-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>Details</div> `,
  styles: ``,
})
export class DetailsComponent {
  // store = inject(BooksStore);
}
