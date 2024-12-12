import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="flex gap-3">
    @for (val of store.byValues(); track val) {
      <button class="btn btn-circle" (click)="store.changeCountBy(val)">
        {{ val }}
      </button>
    }
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
