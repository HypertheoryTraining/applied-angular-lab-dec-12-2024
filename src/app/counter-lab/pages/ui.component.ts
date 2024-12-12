import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="decrementDisabled()"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>
    <div>
      <p data-testid="fizzBuzz">{{ fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);

  increment() {
    this.current.update(() => this.current() + 1);
  }
  decrement() {
    this.current.update(() => this.current() - 1);
  }

  decrementDisabled = computed(() => this.current() === 0);

  fizzBuzz = computed(() => {
    if (this.current() === 0) return '';
    if (this.current() % 3 === 0 && this.current() % 5 === 0) return 'FizzBuzz';
    if (this.current() % 3 === 0) return 'Fizz';
    if (this.current() % 5 === 0) return 'Buzz';
    return '';
  });
}
