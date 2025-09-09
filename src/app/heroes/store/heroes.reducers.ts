import { createReducer, on } from '@ngrx/store';
import { Hero } from '../../hero';
import * as HeroActions from './heroes.actions';

export interface HeroState {
  heroes: Hero[];
}

export const initialState: HeroState = {
  heroes: [],
};

export const heroReducer = createReducer(
  initialState,
  on(HeroActions.loadHeroesSuccess, (state, { heroes }) => ({
    ...state,
    heroes,
  })),
  on(HeroActions.addHeroSuccess, (state, { hero }) => ({
    ...state,
    heroes: [...state.heroes, hero],
  })),
  on(HeroActions.deleteHeroSuccess, (state, { id }) => ({
    ...state,
    heroes: state.heroes.filter((h) => h.id !== id),
  }))
);
