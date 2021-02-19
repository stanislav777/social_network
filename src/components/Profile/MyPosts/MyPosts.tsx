import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator, postPropsType, ActionsTypes} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<postPropsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {


    let post = props.posts.map((p) => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator());
        }
    }


    let onPostChange = () => {
        if (newPostElement.current) {
            let postText = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(postText))
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3> My posts </h3>
            </div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}> </textarea>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

