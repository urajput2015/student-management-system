import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user-model';


export enum UserRegisterActionTypes
{
    registrationInitiated='[Register Page] Initiated Registeration',
    registrationSuccess='[Register Page] Registration Success',
    registrationFailure='[Register Page] Registration Failure',
}

export class registrationInitiatedAction implements Action
{
    readonly type=UserRegisterActionTypes.registrationInitiated;
    constructor(readonly payload:UserModel)  {
        console.log('payload',payload);
     }

}

export class registrationSuccessAction implements Action
{
    readonly type=UserRegisterActionTypes.registrationSuccess;
    constructor(readonly payload:UserModel)  { }

}

export class registrationFailureAction implements Action
{
    readonly type=UserRegisterActionTypes.registrationFailure;
    constructor(readonly payload:UserModel)  { }

}

export type registrationActions=registrationInitiatedAction|registrationSuccessAction|registrationFailureAction;