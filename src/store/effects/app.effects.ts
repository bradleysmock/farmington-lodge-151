import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, of} from 'rxjs';
import * as AppActions from '../actions/app.actions';
import {AppService} from '../services/app.service';

@Injectable()
export class AppEffects {
  private readonly actions$ = inject(Actions);
  private readonly appService = inject(AppService);

  // Effect for loading todos
  initializeApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.initializeApplication),
      mergeMap(() =>
        this.appService.initializeApp().pipe(
          map((appData) => AppActions.initializeApplicationSuccess(appData)),
          catchError((error) => of(AppActions.initializeApplicationFailure({error})))
        )
      )
    )
  );
}
