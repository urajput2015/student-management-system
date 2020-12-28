import { UserModel } from 'src/app/models/user-model';

export interface AuthState
{
    user?:UserModel;
    isLoggedIn:boolean
}