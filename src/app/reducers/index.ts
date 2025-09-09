import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { heroReducer, HeroState } from '../heroes/store/heroes.reducers';

export interface State {
  heroes: HeroState;
}

export const reducers: ActionReducerMap<State> = {
  heroes: heroReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
