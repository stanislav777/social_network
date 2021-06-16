import {Dispatch} from 'redux';
import {authAPI} from '../api/API';

const SET_USER_DATE = 'SET_USER_DATE';


let initialState = {
    userId: null as number | null,
    login: '',
    email: '',
    isAuth: false
};
export type InitialAuthState = typeof initialState

const authReducer = (state: InitialAuthState = initialState, action: ActionsType): InitialAuthState => {

    switch (action.type) {

        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUserDate = (userId: number, login: string, email: string) => ({
    type: SET_USER_DATE,
    data: {userId, login, email}
} as const)

type ActionsType = ReturnType<typeof setAuthUserDate>

export default authReducer

export const getAuthUserDateTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
              dispatch(setAuthUserDate(id, login, email));
            }
        });
    }
}
