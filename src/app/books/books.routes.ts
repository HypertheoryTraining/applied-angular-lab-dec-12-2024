import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListComponent } from './components/list-component';
import { StatsComponent } from './components/stats-component';
import { BooksDataService } from './services/books-data.service';
import { BookStore } from './services/books.store';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    providers: [BooksDataService, BookStore],
    component: BooksComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'stats', component: StatsComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
