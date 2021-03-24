import {UserType} from './state';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
};
export type InitialUserState = typeof initialState

const usersReducer = (state: InitialUserState = initialState, action: ActionsType) => {

    switch (action.type) {

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


export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, count: totalUsersCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

type ActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetching>

export default usersReducer