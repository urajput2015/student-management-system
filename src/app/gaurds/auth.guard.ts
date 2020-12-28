import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';


export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isUserLoggedIn = this.store.select(state => state.authState.isLoggedIn);
        return isUserLoggedIn;
    }
}