import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex flex-col gap-5">
      <div class="flex flex-row gap-5">
        <a
          routerLink="ui"
          [routerLinkActive]="['btn-selected']"
          class="btn btn-secondary"
          >UI</a
        >
        <a
          routerLink="prefs"
          [routerLinkActive]="['btn-selected']"
          class="btn btn-secondary"
          >Preferences</a
        >
      </div>
      <router-outlet />
    </div>
  `,
  styles: `
    .btn {
      width: 100px;
    }

    .btn-selected {
      transform: scale(0.98);
      box-shadow: 3px 2px 12px 1px rgba(0, 0, 0, 0.24);
    }
  `,
})
export class CounterComponent {}
