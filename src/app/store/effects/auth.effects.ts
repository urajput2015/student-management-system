import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { loginActions, AuthActionTypes, loginSuccessAction, loginFailureAction } from '../actions/login-actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { of, Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {
    }
    @Effect()
    login$ = this.actions$
        .pipe(
            ofType<loginActions>(AuthActionTypes.login),
            switchMap((action) =>

                // call the service
                this.authService.login(action.payload).pipe(
                    // return a Success action when everything went OK
                    map((res: any) => {
                        return (new loginSuccessAction({ user: res }))
                    }),
                    // return a Failed action when something went wrong
                    catchError((error: any) => of(new loginFailureAction({ error: error, user: null })))
                ),
            ),
        );

    @Effect({ dispatch: false })
    loginSuccess$: Observable<any> = this.actions$.pipe(
        ofType<loginActions>(AuthActionTypes.loginSuccess),
        tap((res: any) => {
            localStorage.setItem('token', res.payload.user.auth_token);
            localStorage.setItem('user', res.payload.user.user);
            this.router.navigateByUrl('/home');

        })
    );


}