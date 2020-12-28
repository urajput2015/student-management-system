import { Effect, Actions, ofType } from '@ngrx/effects';
import { registrationActions, UserRegisterActionTypes, registrationSuccessAction, registrationFailureAction } from '../actions/user-register.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class UserRegisterEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router

    ) {

    }
    @Effect()
    register$ = this.actions$
        .pipe(ofType<registrationActions>(UserRegisterActionTypes.registrationInitiated),
            switchMap((action) =>

                this.authService.register(action.payload).pipe(
                    // return a Success action when everything went OK
                    map(() => {
                        return (new registrationSuccessAction(null));
                    }),
                    // return a Failed action when something went wrong
                    catchError((error: any) => of(new registrationFailureAction(error)))
                ),
            )
        );

    @Effect({ dispatch: false })
    registerSuccess$: Observable<any> = this.actions$.pipe(
        ofType<registrationActions>(UserRegisterActionTypes.registrationSuccess),
        tap((sss: any) => {
            console.log('userdddddddddddddddd');
            // localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/login');
        })
    );
}