import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex gap-5 flex-row align-bottom">
      <button
        class="btn btn-primary"
        (click)="store.decrement()"
        [disabled]="store.disableDecrement()"
      >
        -
      </button>
      <span class="btn btn-circle no-click" data-testid="current">{{
        store.current()
      }}</span>
      <button class="btn btn-primary" (click)="store.increment()">+</button>
      <button class="btn btn-warning" (click)="store.reset()">Reset</button>
      <span>{{ store.fizzBuzz() }}</span>
    </div>
  `,
  styles: `
    .no-click {
      pointer-events: none;
    }
  `,
})
export class UiComponent {
  store = inject(CounterStore);
}
