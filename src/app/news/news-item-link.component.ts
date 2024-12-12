import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NewsItemLink } from './types';

@Component({
  selector: 'app-news-item-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="card-actions justify-end">
      <a class="btn btn-primary" [href]="link().href" target="_blank">{{
        link().caption
      }}</a>
    </div>
  `,
  styles: ``,
})
export class NewsItemLinkComponent {
  link = input.required<NewsItemLink>();
}
