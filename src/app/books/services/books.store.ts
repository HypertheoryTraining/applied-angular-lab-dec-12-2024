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

export const BookStore = signalStore(
  withEntities<BookEntity>(),
  withComputed((store) => {
    return {
      books: computed(() => store.entities()),
      stats: computed(() => deriveStatsFromBooks(store.entities())),
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

function deriveStatsFromBooks(entities: BookEntity[]) {
  const totalPages = entities.reduce((p, b) => p + b.pages, 0);
  const total = entities.length;
  const averagePages = Math.round(totalPages / total);
  const earliestYear = entities.reduce(
    (p, b) => (b.year < p ? b.year : p),
    Number.MAX_SAFE_INTEGER,
  );
  const latestYear = entities.reduce(
    (p, b) => (b.year > p ? b.year : p),
    Number.MIN_SAFE_INTEGER,
  );
  return {
    total,
    earliest:
      earliestYear < 0 ? Math.abs(earliestYear) + ' BC' : earliestYear + ' AD',
    latest: latestYear >= 0 ? latestYear + ' AD' : Math.abs(latestYear) + ' BC',
    averagePages,
  };
}
