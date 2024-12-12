import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter-lab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div>Counter Stuff Goes Here</div>
    <a routerLink="ui" class="link">UI</a>
  `,
  styles: ``,
})
export class CounterComponent {}
