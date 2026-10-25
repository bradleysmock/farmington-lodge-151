import {Component, inject} from '@angular/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {getAppMenu} from '../../store/selectors/app.selectors';

@Component({
  selector: 'app-menu',
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private readonly store = inject(Store<AppState>);
  menu$ = this.store.select(getAppMenu);

  open = false;

  toggle() {
    this.open = !this.open;
  }
}
