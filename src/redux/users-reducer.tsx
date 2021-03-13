import {ActionsTypes, usersPageType} from './state';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [ ],
};
export type InitialUserState = typeof initialState

const usersReducer = (state: InitialUserState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.id) {
                        return {...t, followed: true}
                    }
                    return t;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.id) {
                        return {...t, followed: false}
                    }
                    return t;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users, ...action.users]
            }

        default:
            return state;
    }
}



export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: usersPageType) => ({type: SET_USERS, users})

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export default usersReducer