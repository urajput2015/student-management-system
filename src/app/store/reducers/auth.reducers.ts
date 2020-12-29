import { AuthState } from '../states/auth.state';
import { loginActions, AuthActionTypes } from '../actions/login-actions';

export const initialLoginState: AuthState = {
    user: null,
    isLoggedIn: false
};

export function authReducer(state:AuthState=initialLoginState,action:loginActions):AuthState
{
    switch (action.type) {
        case AuthActionTypes.loginSuccess :
            {
                console.log('callig success action');
                return {
                   user:action.payload.user,
                   isLoggedIn:true
                }
            }

            case AuthActionTypes.loginFailure :
            {
                return {
                    user: undefined,
                    isLoggedIn: false
                }
            }
            default:{
                return state;
            }
    }
}

