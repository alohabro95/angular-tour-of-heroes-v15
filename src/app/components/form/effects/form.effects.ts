import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as FormActions from '../actions/form.actions';

@Injectable()
export class FormEffects {
  loadForms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FormActions.loadForms),
      switchMap(() => {
        return of(FormActions.loadFormsSuccess());
      })
    );
  });

  constructor(private actions$: Actions) {}
}
