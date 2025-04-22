import {Component} from '@angular/core';
import {HistoryComponent} from '../history/history.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HistoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
