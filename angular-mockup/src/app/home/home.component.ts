import {Component} from '@angular/core';
import {LodgeHistoryComponent} from '../lodge-history/lodge-history.component';
import {MasonicHistoryComponent} from '../masonic-history/masonic-history.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LodgeHistoryComponent,
    MasonicHistoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
