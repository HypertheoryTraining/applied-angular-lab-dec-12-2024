import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h3>Count By:</h3>
      <ul>
        @for (val of store.increments(); track val) {
          <li>
            <button
              class="btn"
              (click)="store.changeIncrements(val)"
              [disabled]="store.by() === val"
            >
              Count By {{ val }}
            </button>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
