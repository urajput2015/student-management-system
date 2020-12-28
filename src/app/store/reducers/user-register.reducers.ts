
import { registrationActions, UserRegisterActionTypes } from '../actions/user-register.actions';
import { AuthState } from '../states/auth.state';

export const initialLoginState: AuthState = {
    user: null,
    isLoggedIn: false
};

export function userRegisterReducer(state:AuthState=initialLoginState,action:registrationActions):AuthState
{
    //console.log('action.type',action.type);
    switch (action.type) {
        case UserRegisterActionTypes.registrationSuccess :
            {
                return {
                    user:action.payload,
                    isLoggedIn:true
                 };
            }

            default:{
                return state;
            }
    }
}

