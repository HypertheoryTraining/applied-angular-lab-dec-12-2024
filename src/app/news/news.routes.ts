import { Route } from '@angular/router';
import { NewsComponent } from './news.component';

export const NEWS_ROUTES: Route[] = [
  {
    path: '',
    component: NewsComponent,
    children: [],
  },
];
