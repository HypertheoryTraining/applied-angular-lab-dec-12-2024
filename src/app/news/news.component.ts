import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NewsItem } from './types';
import { NewsItemComponent } from './news-item.component';
import { SectionHeaderComponent } from './section-header.component';

@Component({
  selector: 'app-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsItemComponent, SectionHeaderComponent, SectionHeaderComponent],
  template: ` <app-news-section-header
      title="The Latest News"
      subheading="brought to you by Alex!"
    />
    <section>
      @for (item of newsItems(); track item.id) {
        <app-news-item [newsItem]="item" />
      }
    </section>`,
  styles: ``,
})
export class NewsComponent {
  newsItems = signal<NewsItem[]>([
    {
      id: '1',
      title: 'The State of Javascript',
      description: 'The annual "State of Javascript" Survey is out!',
      link: {
        caption: 'Take the Survey Now',
        href: 'https://stateofjs.com/en-us',
      },
    },
    {
      id: '2',
      title: 'Exciting New Training From Hypertheory',
      description:
        'New training courses for the coming year are being developed...yada yada',
    },
  ]);
}
