import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { BookEntity } from '../types';
import { map } from 'rxjs';

export class BooksDataService {
  #client = inject(HttpClient);

  getBooks() {
    return this.#client
      .get<{ data: BookEntity[] }>('/api/books')
      .pipe(map((r) => r.data));
  }
}
