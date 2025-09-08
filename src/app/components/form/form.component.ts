import { Component } from '@angular/core';
import { State } from './reducers/form.reducer';
import { Store } from '@ngrx/store';
import { selectIsLoaded } from './selectors/form.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isLoaded$: Observable<boolean>;
  constructor(private store: Store<State>) {
    this.isLoaded$ = this.store.select(selectIsLoaded);
  }
}
