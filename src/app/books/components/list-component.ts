import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <p>book list</p>
    <pre>{{ books.value() | json }}</pre>
  `,
  styles: ``,
})
export class ListComponent {
  books = resource({
    loader: () => fetch('/api/books').then((r) => r.json()),
  });
}
