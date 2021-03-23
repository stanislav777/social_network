import {ActionsTypes, UserType} from './state';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    users: [ ] as Array<UserType>,
    pageSize:5,
    totalUsersCount:50,
    currentPage: 1,
    isFetching: true,
};
export type InitialUserState = typeof initialState

const usersReducer = (state: InitialUserState = initialState, action: ActionsTypes) => {

    switch (action.type)  {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

        case  UNFOLLOW:
            return {

                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                        alert('UNFOLLOW');
                    }
                    return user;

                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case  SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }
        case  SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count,
            }
        case  TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            }

        default:
            return state;
    }
}



export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE,currentPage} as const)
export const setTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT,count:totalUsersCount} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING,isFetching} as const)

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalCountACType = ReturnType<typeof setTotalCountAC>
export type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export default usersReducer