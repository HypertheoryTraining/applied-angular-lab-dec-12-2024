import {
  signalStoreFeature,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';

export function withSelectedBook() {
  return signalStoreFeature(
    withState<{ selectedBook: string | null }>({ selectedBook: null }),
    withMethods((store) => ({
      setSelectedBook: (selectedBook: string) =>
        patchState(store, { selectedBook }),
    })),
  );
}
