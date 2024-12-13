import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `<div>
    <nav>
      <a class="link link-primary m-4" routerLink="ui">Counter</a>
      <a class="link link-primary m-4" routerLink="prefs">Prefs</a>
    </nav>
    <router-outlet />
  </div>`,
  styles: ``,
})
export class CounterComponent {}
