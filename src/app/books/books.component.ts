import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListComponent } from './components/list-component';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListComponent],
  template: `
    <p>books</p>
    <app-book-list />
  `,
  styles: ``,
})
export class BooksComponent {}
