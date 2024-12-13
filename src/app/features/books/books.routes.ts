import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { StatsComponent } from './pages/stats.component';
import { ListComponent } from './pages/list.component';
import { PrefsComponent } from './pages/prefs.component';
import { DetailsComponent } from './pages/details.component';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
