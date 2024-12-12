import { signalStoreFeature, withState } from '@ngrx/signals';
type SelectedState = {
  selectedId: string | null;
};
export function withSelected() {
  return signalStoreFeature(
    withState<SelectedState>({
      selectedId: null,
    }),
  );
}

export function clearSelected(): SelectedState {
  return { selectedId: null };
}

export function setSelected(id: string): SelectedState {
  return { selectedId: id };
}
