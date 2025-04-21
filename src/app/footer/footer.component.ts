import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly store = inject(Store<AppState>);
}
