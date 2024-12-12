import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="grid  gap-4">
      <a
        class="link"
        routerLink="list"
        [routerLinkActive]="[
          'text-bold',
          'underline',
          'font-bold',
          'uppercase',
        ]"
        >List</a
      >
      <a
        class="link "
        routerLink="stats"
        [routerLinkActive]="[
          'text-bold',
          'underline',
          'font-bold',
          'uppercase',
        ]"
        >Stats</a
      >
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class BooksComponent {}
