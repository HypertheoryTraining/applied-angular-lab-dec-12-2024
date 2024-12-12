import { Route } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui.component';

export const COUNTER_ROUTES: Route[] = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'ui',
    component: UiComponent,
  },
];
