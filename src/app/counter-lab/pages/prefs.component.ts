import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <button class="btn btn-circle" (click)="store.changeCountBy(1)">1</button>
    <button class="btn btn-circle" (click)="store.changeCountBy(3)">3</button>
    <button class="btn btn-circle" (click)="store.changeCountBy(5)">5</button>
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
