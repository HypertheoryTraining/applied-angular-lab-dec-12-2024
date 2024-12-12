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
import {
  clearSelected,
  setSelected,
  withSelected,
} from './features/selected.feature';

export const BookStore = signalStore(
  withDevtools('books'),
  withEntities<BookEntity>(),
  withSorting(),
  withSelected(),
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
      selectedBook: computed(() => {
        const id = store.selectedId();
        if (id !== null) {
          return store.entityMap()[id];
        } else {
          return null;
        }
      }),
    };
  }),
  withMethods((store) => {
    const service = inject(BooksDataService);

    return {
      setSelected: (id: string) => patchState(store, setSelected(id)),
      clearSelected: () => patchState(store, clearSelected()),
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
