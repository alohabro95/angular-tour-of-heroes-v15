import { createAction, props } from '@ngrx/store';
import { Hero } from '../../hero';

export const loadHeroes = createAction('[Hero] Load Heroes');
export const loadHeroesSuccess = createAction('[Hero] Load Heroes Success', props<{ heroes: Hero[] }>());
export const addHero = createAction('[Hero] Add Hero', props<{ hero: Hero }>());
export const addHeroSuccess = createAction('[Hero] Add Hero Success', props<{ hero: Hero }>());
export const deleteHero = createAction('[Hero] Delete Hero', props<{ id: number }>());
export const deleteHeroSuccess = createAction('[Hero] Delete Hero Success', props<{ id: number }>());