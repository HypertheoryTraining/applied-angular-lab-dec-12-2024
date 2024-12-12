import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-ui-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        class="btn btn-primary"
        (click)="decrement()"
        [disabled]="disableDecrement()"
      >
        -
      </button>
      <span data-testid="current">{{ current() }}</span>
      <button class="btn btn-primary" (click)="increment()">-</button>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);

  increment() {
    this.current.update((c) => c + 1);
  }

  decrement() {
    this.current.update((c) => c - 1);
  }

  disableDecrement = computed(() => this.current() === 0);
}
