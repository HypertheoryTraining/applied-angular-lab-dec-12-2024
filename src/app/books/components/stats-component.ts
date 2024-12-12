import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total Books</div>
        <div class="stat-value">999</div>
      </div>
      <div class="stat">
        <div class="stat-title">Earliest Book</div>
        <div class="stat-value">1200 BC</div>
      </div>
      <div class="stat">
        <div class="stat-title">Most Recent Book</div>
        <div class="stat-value">2025 AD</div>
      </div>
      <div class="stat">
        <div class="stat-title">Average Pages</div>
        <div class="stat-value">236</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatsComponent {}
