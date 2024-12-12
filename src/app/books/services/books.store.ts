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

export const BookStore = signalStore(
  withEntities<BookEntity>(),
  withComputed((store) => {
    return {
      books: computed(() => store.entities()),
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
