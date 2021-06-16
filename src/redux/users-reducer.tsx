import {usersAPI} from '../api/API';
import {Dispatch} from 'redux';

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
    photos: {
        small: string
        large: string
    }
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export type InitialUserStateType = typeof initialState

const usersReducer = (state: InitialUserStateType = initialState, action: ActionsType): InitialUserStateType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
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
        case  TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

//Action

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


type ActionsType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


//ThunkCreator

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount))
        });
    }
}


export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        debugger
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export const unfollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        debugger
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfolow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;