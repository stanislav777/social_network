const  SET_USER_PROFILE = 'SET_USER_PROFILE';
const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello. How are you', likesCounts: 2184},
        {id: 2, message: 'Yo. I am busy now.', likesCounts: 45},
        {id: 3, message: 'Hello. i am your friend', likesCounts: 56},
    ],
    newPostText: '',
    profile: null as ProfileType | null
}
export type InitialProfileState = typeof initialState

const profileReducer = (state: InitialProfileState = initialState, action: ActionType) => {
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
        default:
            return state;
    }
}

export const addPostAC = () => { return {type: ADD_POST} as const}
export const updateNewPostTextAC = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const}
export const setUserProfileAC = (profile: ProfileType) => { return {type: SET_USER_PROFILE, profile} as const}


type  ActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
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

// export const unfollowThunkCreator = (userId:number) => {
//     return (dispatch: Dispatch<ActionsType>) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         usersAPI.unfolow(userId)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(unfollowSuccess(userId))
//                 }
//                 dispatch(toggleFollowingProgress(false, userId));
//             })
//     }
// }
