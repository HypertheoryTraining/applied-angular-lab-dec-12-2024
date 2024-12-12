import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { StatsComponent } from './stats.component';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];
