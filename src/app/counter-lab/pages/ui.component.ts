import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="store.dec()"
        [disabled]="store.disableDecrease()"
      >
        -
      </button>
      <span data-testid="current">{{ store.count() }}</span>
      <button class="btn btn-primary" (click)="store.inc()">+</button>
      <p data-testid="fizzBuzz">{{ store.fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
