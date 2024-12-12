import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { BooksDataService } from './books-data.service';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { tapResponse } from '@ngrx/operators';
import { BookEntity } from '../types';

export const BooksStore = signalStore(
  withEntities<BookEntity>(),
  withComputed((store) => {
    return {
      books: computed(() => store.entities()),
      booksTotal: computed(() => store.entities().length),
      earliestYearPublished: computed(() =>
        store
          .entities()
          .reduce((a, b) => (b.year < a ? b.year : a), Number.MAX_SAFE_INTEGER),
      ),
      mostRecentYearPublished: computed(() =>
        store
          .entities()
          .reduce((a, b) => (b.year > a ? b.year : a), Number.MIN_SAFE_INTEGER),
      ),
      averageNumberOfPages: computed(() => {
        return (
          store.entities().reduce((sum, books) => sum + books.pages, 0) /
          store.entities().length
        );
      }),
    };
  }),
  withMethods((store) => {
    const service = inject(BooksDataService);
    return {
      _loadServerData: rxMethod<void>(
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
      store._loadServerData();
    },
  }),
);
