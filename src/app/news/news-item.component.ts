import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NewsItem } from './types';
import { NewsItemLinkComponent } from './news-item-link.component';

@Component({
  selector: 'app-news-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemLinkComponent],
  template: `
    @let item = newsItem();
    <article class="card bg-base-300 mb-8">
      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
        <p>{{ item.description }}</p>
        @if (item.link) {
          <app-news-item-link [link]="item.link" />
        }
      </div>
    </article>
  `,
  styles: ``,
})
export class NewsItemComponent {
  newsItem = input.required<NewsItem>();
}
