import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListComponent } from './pages/list-component';
import { StatsComponent } from './pages/stats-component';
import { BooksDataService } from './services/books-data.service';
import { BookStore } from './services/books.store';
import { PrefsComponent } from './pages/prefs-component';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    providers: [BooksDataService, BookStore],
    component: BooksComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'prefs', component: PrefsComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
