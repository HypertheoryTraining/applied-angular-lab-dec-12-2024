import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
  effect,
} from '@angular/core';
import { BookStore } from '../services/books.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    @let book = store.selectedBook();
    @if (book) {
      <div class="card bg-base-100  shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-green-600 text-3xl">
            {{ book.title }}
          </h2>
          <p>{{ book.title }} is by {{ book.author }}.</p>
          <p>It was released in {{ book.year }} by {{ book.author }}</p>
          <p>It is written in the language {{ book.language }}</p>
          <p>It is from the country {{ book.country }}</p>
          <a class="link" [href]="book.link" target="_blank">Details</a>
        </div>
      </div>
    } @else {
      <p>No Book</p>
    }

    <a [routerLink]="['..', '..', 'list']" class="btn btn-primary"
      >Back To List</a
    >
  `,
  styles: ``,
})
export class DetailsComponent {
  id = input<string>();
  store = inject(BookStore);
  constructor() {
    effect(() => {
      const id = this.id();
      if (id) {
        this.store.setSelected(id);
      }
    });
  }
}
