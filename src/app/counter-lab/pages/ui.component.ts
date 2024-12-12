import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary" (click)="dec()" [disabled]="atZero()">
        -
      </button>
      <span data-testid="current">{{ count() }}</span>
      <button class="btn btn-primary" (click)="inc()">+</button>
      <p data-testid="fizzBuzz">{{ fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  count = signal(0);
  atZero = computed(() => this.count() === 0);

  dec() {
    this.count.update((n) => n - 1);
  }
  inc() {
    this.count.update((n) => n + 1);
  }
  fizzBuzz() {
    if (this.count() === 0) {
      return '';
    } else if (this.count() % 3 === 0 && this.count() % 5 === 0) {
      return 'fizzbuzz';
    } else if (this.count() % 3 === 0) {
      return 'fizz';
    } else if (this.count() % 5 === 0) {
      return 'buzz';
    } else {
      return '';
    }
  }
}
