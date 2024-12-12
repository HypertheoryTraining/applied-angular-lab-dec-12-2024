import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { BookEntity } from '../types';
import { BooksDataService } from './books-data.service';
import * as helpers from './helpers';
import { withSorting } from './features/sort.feature';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const BookStore = signalStore(
  withDevtools('books'),
  withEntities<BookEntity>(),
  withSorting(),
  withComputed((store) => {
    return {
      books: computed(() =>
        store.entities().sort((a, b) => {
          const key = store.by();
          switch (key) {
            case 'year':
              return a.year > b.year ? 1 : a.year < b.year ? -1 : 0;
            case 'author':
            case 'title':
              return a[key].localeCompare(b[key]);
          }
        }),
      ),
      stats: computed(() => helpers.deriveStatsFromBooks(store.entities())),
    };
  }),
  withMethods((store) => {
    const service = inject(BooksDataService);

    return {
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            service.getBooks().pipe(
              tapResponse({
                next(value) {
                  patchState(store, setEntities(value));
                },
                error(error) {
                  console.error(error);
                },
              }),
            ),
          ),
        ),
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
