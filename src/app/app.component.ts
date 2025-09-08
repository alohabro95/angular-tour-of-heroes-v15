import { Component, OnInit } from '@angular/core';
import { State } from './reducers';
import { loadForms, resetForm } from './components/form/actions/form.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    // this.store.dispatch(loadForms());
  }

  openForm() {
    this.store.dispatch(loadForms());
  }

  resetForm() {
    this.store.dispatch(resetForm());
  }
}
