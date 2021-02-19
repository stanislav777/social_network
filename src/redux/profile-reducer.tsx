import store, {PostPropsType} from "./state";
import exp from "constants";

const profileReducer = (state, action) => {

    if (action.type === "ADD_POST") {
        const newPost: PostPropsType = {
            id: 4,
            message: (store._state.profilePage.newPostText),
            likesCounts: 45
        }
        state.posts.push(newPost);
        state.newPostText = ""

    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer