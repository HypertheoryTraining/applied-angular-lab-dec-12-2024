import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-display-stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">{{ title() }}</div>
        <div class="stat-value">{{ value() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatsDisplayComponent {
  title = input.required<string>();
  value = input.required<unknown>();
}
