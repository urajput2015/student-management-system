import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user-model';

export enum AuthActionTypes {
    loginSuccess = '[Login Page] User Login Success',
    loginFailure = '[Login Page] User Login Faliure',
    login = '[Login Page] User Login'
}

export class loginAction implements Action {
   
    constructor(readonly payload: { userId: string, password: string }) {

    }
    type: string=AuthActionTypes.login;

}

export class loginSuccessAction implements Action {
    type: string=AuthActionTypes.loginSuccess;
    constructor(readonly payload: { user: UserModel }) {

    }

}

export class loginFailureAction implements Action {
    type: string=AuthActionTypes.loginFailure;
    constructor(readonly payload: { user: UserModel, error: any }) {

    }
}

export type loginActions =  loginSuccessAction |loginFailureAction;