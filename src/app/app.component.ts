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
  title = 'ngx-sms';
  isLoggedIn$: Observable<boolean>;
  user$: Observable<any>;
  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(state => (state.authState.isLoggedIn || state.registrationState.isLoggedIn));
    this.user$ = this.store.select(state => (state.authState.user ||state.registrationState.user));

  }
  logout(){

  }

}
