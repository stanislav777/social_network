import React from "react";
import {addPostActionCreator, StoreType, updateNewPostTextActionCreator} from "../../../redux/state";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }


    let onPostChange = (postText) => {
        let action = updateNewPostTextActionCreator(postText);
        props.store.dispatch(action)
    }


    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

