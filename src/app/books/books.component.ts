import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex gap-4 p-8">
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
      <a
        class="link"
        routerLink="prefs"
        [routerLinkActive]="[
          'text-bold',
          'underline',
          'font-bold',
          'uppercase',
        ]"
        >Prefs</a
      >
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class BooksComponent {}
