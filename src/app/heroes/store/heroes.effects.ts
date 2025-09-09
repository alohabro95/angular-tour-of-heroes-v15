import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HeroService } from '../../hero.service';
import * as HeroActions from './heroes.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.loadHeroes),
      mergeMap(() =>
        this.heroService
          .getHeroes()
          .pipe(map((heroes) => HeroActions.loadHeroesSuccess({ heroes })))
      )
    )
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.addHero),
      mergeMap((action) =>
        this.heroService
          .addHero(action.hero)
          .pipe(map((hero) => HeroActions.addHeroSuccess({ hero })))
      )
    )
  );

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.deleteHero),
      mergeMap((action) =>
        this.heroService
          .deleteHero(action.id)
          .pipe(map(() => HeroActions.deleteHeroSuccess({ id: action.id })))
      )
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
