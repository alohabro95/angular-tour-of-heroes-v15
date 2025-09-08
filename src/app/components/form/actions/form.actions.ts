import { createAction, props } from '@ngrx/store';

export const loadForms = createAction('[Form] Load Forms');

export const loadFormsSuccess = createAction('[Form] Load Forms Success');

export const loadFormsFailure = createAction(
  '[Form] Load Forms Failure',
  props<{ error: any }>()
);
export const resetForm = createAction('[Form] Reset Form');
