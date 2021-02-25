import {ActionsTypes, addPostActionCreator, PostPropsType, StoreType, updateNewPostTextActionCreator} from "./state";


let initialState =  {
    posts: [
        {id: 1, message: "Hello. How are you", likesCounts: 2184},
        {id: 2, message: "Yo. I am busy now.", likesCounts: 45},
        {id: 3, message: "Hello. i am your friend", likesCounts: 56},
    ],
        newPostText: ""
}

const profileReducer = (state:StoreType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostPropsType = {
                id: 4,
                message: (state.newPostText),
                likesCounts: 45
            }
            state.posts.push(newPost);
            state.newPostText = ""
            return state;
        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export type UpdateNewPostTextActionType = ReturnType<typeof  updateNewPostTextActionCreator>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export default profileReducer