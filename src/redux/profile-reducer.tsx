import {profileAPI, usersAPI} from '../api/API';
import {Dispatch} from 'redux';

const  SET_USER_PROFILE = 'SET_USER_PROFILE';
const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello. How are you', likesCounts: 2184},
        {id: 2, message: 'Yo. I am busy now.', likesCounts: 45},
        {id: 3, message: 'Hello. i am your friend', likesCounts: 56},
    ],
    newPostText: '',
    profile: null as ProfileType | null,
    status:""
}
export type InitialProfileState = typeof initialState

const profileReducer = (state: InitialProfileState = initialState, action: ActionsType) => {
    switch (action.type) {

        case 'ADD_POST':
            const newPost: PostPropsType = {
                id: 4,
                message: (state.newPostText),
                likesCounts: 45
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case 'UPDATE_NEW_POST_TEXT': {
            return {...state, newPostText: action.newText};
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile }
        }
        case 'SET_STATUS': {
            return {...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostAC = () => { return {type: ADD_POST} as const}
export const updateNewPostTextAC = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const}
export const setUserProfileAC = (profile: ProfileType) => { return {type: SET_USER_PROFILE, profile} as const}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status} as const}

type  ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export default profileReducer

export type PostPropsType =
    {
        id: number
        message: string
        likesCounts: number
    }

export type  ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {
        small: string
        large: string
    }
}

export const getProfileThunkCreator = (userId:number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        usersAPI.getProfile(userId)
              .then(response => {
                dispatch(setUserProfileAC(response.data));
            })
    }
}

export const getStatusThunkCreator = (userId:number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger
                dispatch(setStatusAC(response.data));
            })
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ActionsType>) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0)
                dispatch(setStatusAC(status));
            })
    }
}


