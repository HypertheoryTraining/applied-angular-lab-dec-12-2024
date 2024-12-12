import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="store.decrement()"
        [disabled]="store.disableDecrement()"
      >
        -
      </button>
      <span data-testid="current">{{ store.current() }}</span>
      <button class="btn btn-primary" (click)="store.increment()">+</button>
      <span>{{ store.fizzBuzz() }}</span>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
