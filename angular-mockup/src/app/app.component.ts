import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppState} from "../store/state/app.state";
import {Store, StoreModule} from "@ngrx/store";
import * as AppActions from "../store/actions/app.actions";
import {HeaderComponent} from "./header/header.component";
import {AlertComponent} from "./alert/alert.component";
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, AlertComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly store = inject(Store<AppState>);

  ngOnInit() {
    this.store.dispatch(AppActions.initializeApplication())
  }
}
