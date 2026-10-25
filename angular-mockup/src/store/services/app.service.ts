import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {of} from 'rxjs';
import * as appData from '../../data/data.json';

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly http = inject(HttpClient);

  initializeApp() {
    return of(appData);
  }

}
