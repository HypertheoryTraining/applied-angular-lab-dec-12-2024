import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-news-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <h2 class="text-2xl font-bold mb-8">{{ title() }}</h2>
    @if (subheading()) {
      <p>{{ subheading() }}</p>
    }`,
  styles: ``,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subheading = input<string>();
}
