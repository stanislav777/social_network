import store, {addPostActionCreator, PostPropsType, updateNewPostTextActionCreator} from "./state";
import exp from "constants";
import state from "./state";

const profileReducer = (state, action) => {

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