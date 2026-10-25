import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {getAppTitle} from '../../store/selectors/app.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {MenuComponent} from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    MenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly store = inject(Store<AppState>);
  title$ = this.store.select(getAppTitle);
}
