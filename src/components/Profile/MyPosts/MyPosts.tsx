import React from "react";
import { PostPropsType } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
    /*dispatch: (action: ActionsTypes) => void*/
    newPostText: string
    addPost: () => void
    updateNewPostText: (postText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let post = props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let postText = newPostElement.current.value;
            props.updateNewPostText(postText)
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
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

