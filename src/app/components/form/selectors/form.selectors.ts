import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromForm from '../reducers/form.reducer';

export const selectFormState = createFeatureSelector<fromForm.State>(
  fromForm.formFeatureKey
);

export const selectIsLoaded = createSelector(
  selectFormState,
  (state) => state.isLoaded
);
