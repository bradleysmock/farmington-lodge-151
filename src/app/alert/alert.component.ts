import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {AsyncPipe, NgIf} from '@angular/common';
import {getAlert} from '../../store/selectors/app.selectors';
import {map} from 'rxjs';

@Component({
  selector: 'app-alert',
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  private readonly store = inject(Store<AppState>);
  appAlert$ = this.store.select(getAlert);
  isActive$ = this.appAlert$.pipe(map((alert) => alert.isActive))
  alertMessage$ = this.appAlert$.pipe(map((alert) => alert.message))
}
