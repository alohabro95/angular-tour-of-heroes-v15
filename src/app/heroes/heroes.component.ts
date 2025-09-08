import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import * as HeroActions from './store/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<{ heroes: { heroes: Hero[] } }>) {
    this.heroes$ = this.store.select((state) => state.heroes.heroes);
  }

  ngOnInit(): void {
    this.store.dispatch(HeroActions.loadHeroes());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(HeroActions.addHero({ hero: { name } as Hero }));
  }

  delete(hero: Hero): void {
    this.store.dispatch(HeroActions.deleteHero({ id: hero.id }));
  }
}
