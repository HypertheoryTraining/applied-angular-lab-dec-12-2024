import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { BookEntity } from '../types';

export class BooksDataService {
  #httpClient = inject(HttpClient);

  getBooks() {
    return this.#httpClient
      .get<{ data: BookEntity[] }>('/api/books')
      .pipe(map((r) => r.data));
  }
}
