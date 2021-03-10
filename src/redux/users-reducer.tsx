import {ActionsTypes, addPostActionCreator, updateNewPostTextActionCreator} from './state';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Bob', status: 'Director', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 1, followed: true, fullName: 'Jon', status: 'worker', location: {city: 'Chikago', country: 'USA'}},
        {id: 1, followed: true, fullName: 'Bob', status: 'Director', location: {city: 'Minsk', country: 'Belarus'}},
    ],
};
export type InitialProfileState = typeof initialState

const usersReducer = (state: InitialProfileState = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.id) {
                        return {...t, followed: true}
                    }
                    return t;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.id) {
                        return {...t, followed: false}
                    }
                    return t;
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: [...action.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export type followACType = ReturnType<typeof followACType>
export type unfollowACType = ReturnType<typeof unfollowACType>
export type setUsersACType = ReturnType<typeof setUsersACType>

export default usersReducer