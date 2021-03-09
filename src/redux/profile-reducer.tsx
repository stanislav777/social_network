import {ActionsTypes, addPostActionCreator, PostPropsType, updateNewPostTextActionCreator} from './state';


let initialState = {
    posts: [
        {id: 1, message: 'Hello. How are you', likesCounts: 2184},
        {id: 2, message: 'Yo. I am busy now.', likesCounts: 45},
        {id: 3, message: 'Hello. i am your friend', likesCounts: 56},
    ],
    newPostText: ''
}
export type InitialProfileState = typeof initialState

const profileReducer = (state: InitialProfileState = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case 'ADD_POST':
                const newPost: PostPropsType = {
                id: 4,
                message: (state.newPostText),
                likesCounts: 45
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        case 'UPDATE_NEW_POST_TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export default profileReducer