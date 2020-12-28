import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'our-digital-bharat';
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    console.log('store', this.store);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(state => (state.authState.isLoggedIn || state.registrationState.isLoggedIn));

  }

}
