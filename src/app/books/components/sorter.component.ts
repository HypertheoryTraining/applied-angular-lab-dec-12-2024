import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BookStore } from '../services/books.store';

@Component({
  selector: 'app-book-sorter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal bg-base-200 rounded-box">
      <li>
        <div class="flex flex-row">
          <span class="text-white inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 17L5.75 7H7.9l3.75 10H9.6l-.85-2.4H4.9L4.1 17zm3.5-4.1h2.6L6.9 9.15h-.15zm8.2 4.1v-1.9l5.05-6.3H13.9V7h7.05v1.9l-5 6.3H21V17zM9 5l3-3l3 3zm3 17l-3-3h6z"
              />
            </svg>
          </span>
          <button
            class="btn"
            (click)="store.setSortKey('title')"
            [disabled]="store.by() === 'title'"
          >
            Title
          </button>
        </div>
      </li>
      <li>
        <div class="flex flex-row">
          <span class="text-white inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 17L5.75 7H7.9l3.75 10H9.6l-.85-2.4H4.9L4.1 17zm3.5-4.1h2.6L6.9 9.15h-.15zm8.2 4.1v-1.9l5.05-6.3H13.9V7h7.05v1.9l-5 6.3H21V17zM9 5l3-3l3 3zm3 17l-3-3h6z"
              />
            </svg>
          </span>
          <button
            class="btn"
            (click)="store.setSortKey('author')"
            [disabled]="store.by() === 'author'"
          >
            Author
          </button>
        </div>
      </li>
      <li>
        <div class="flex flex-row">
          <span class="text-white inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h4q.425 0 .713.288T9 17t-.288.713T8 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h10q.425 0 .713.288T15 12t-.288.713T14 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
              />
            </svg>
          </span>
          <button
            class="btn"
            (click)="store.setSortKey('year')"
            [disabled]="store.by() === 'year'"
          >
            Year
          </button>
        </div>
      </li>
    </ul>
  `,
  styles: ``,
})
export class SorterComponent {
  store = inject(BookStore);
}
