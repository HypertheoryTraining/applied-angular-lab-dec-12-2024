import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <button class="btn btn-secondary"><a routerLink="ui">UI</a></button>
      <button class="btn btn-secondary">
        <a routerLink="prefs">Preferences</a>
      </button>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}
