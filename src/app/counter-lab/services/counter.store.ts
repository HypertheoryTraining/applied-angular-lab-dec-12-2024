import { computed } from '@angular/core';
import {
  signalStore,
  withMethods,
  withState,
  patchState,
  withComputed,
} from '@ngrx/signals';

const INCREMENTS = [1, 2, 3];

export type Increments = (typeof INCREMENTS)[number];
type CounterState = {
  count: number;
  by: Increments;
};
export const CounterStore = signalStore(
  withState<CounterState>({
    count: 0,
    by: 1,
  }),
  withMethods((store) => {
    return {
      inc: () => patchState(store, { count: store.count() + store.by() }),
      dec: () => patchState(store, { count: store.count() - store.by() }),
      changeIncrements: (by: Increments) => patchState(store, { by }),
    };
  }),
  withComputed((store) => {
    return {
      fizzBuzz: computed(() => {
        const count = store.count();
        if (count === 0) {
          return '';
        } else if (count % 3 === 0 && count % 5 === 0) {
          return 'fizzbuzz';
        } else if (count % 3 === 0) {
          return 'fizz';
        } else if (count % 5 === 0) {
          return 'buzz';
        } else {
          return '';
        }
      }),
      disableDecrease: computed(() => store.count() - store.by() < 0),
      increments: computed(() => INCREMENTS),
    };
  }),
);
