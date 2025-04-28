import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LodgeHistoryComponent} from './lodge-history/lodge-history.component';
import {MasonicHistoryComponent} from './masonic-history/masonic-history.component';

export const routes: Routes = [
  {
    path: 'masonic-lodge-history',
    component: MasonicHistoryComponent
  },
  {path: 'lodge-lodge-history', component: LodgeHistoryComponent},
  {path: '', component: HomeComponent},
];
