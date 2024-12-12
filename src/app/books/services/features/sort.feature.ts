import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { BookEntity } from '../../types';
type SortKey = keyof Pick<BookEntity, 'title' | 'author' | 'year'>;
type SortState = {
  by: SortKey;
};
export function withSorting() {
  return signalStoreFeature(
    withState<SortState>({ by: 'title' }),
    withMethods((store) => {
      return {
        setSortKey: (by: SortKey) => patchState(store, { by }),
      };
    }),
  );
}
