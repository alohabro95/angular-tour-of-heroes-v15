import { createFeature, createReducer, on } from '@ngrx/store';
import * as FormActions from '../actions/form.actions';

export const formFeatureKey = 'form';

export interface State {
  isLoaded: boolean;
}

export const initialState: State = {
  isLoaded: false,
};

export const reducer = createReducer(
  initialState,
  on(FormActions.loadForms, (state) => state),
  on(FormActions.loadFormsSuccess, (state, action) => ({
    ...state,
    isLoaded: true,
  })),
  on(FormActions.resetForm, (state) => ({
    ...state,
    isLoaded: false,
  })),
  on(FormActions.loadFormsFailure, (state, action) => state)
);

export const formFeature = createFeature({
  name: formFeatureKey,
  reducer,
});
