import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `<div class="flexbox">
    <a class="link link-primary" routerLink="ui">Counter</a>
    <a class="link link-primary" routerLink="prefs">Prefs</a>
    <router-outlet />
  </div>`,
  styles: ``,
})
export class CounterComponent {}
