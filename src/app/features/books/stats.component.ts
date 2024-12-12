import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { StatsDisplayComponent } from './stats.display.component';
import { BookEntity } from './types';

@Component({
  selector: 'app-books-stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatsDisplayComponent],
  template: `<app-display-stat
      [title]="'Total Books'"
      [value]="totalBooks"
    ></app-display-stat>
    <app-display-stat
      [title]="'Earliest Realease'"
      [value]="earliestReleased()"
    ></app-display-stat>`,
  styles: ``,
})
export class StatsComponent {
  books = input.required<BookEntity[]>();

  totalBooks = this.books()?.length.toString() ?? '0';
  earliestReleased = computed(() =>
    this.books()
      .map((b) => b.year)
      .sort((a, b) => a - b)
      .at(0),
  );
}
