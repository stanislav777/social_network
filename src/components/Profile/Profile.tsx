import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPostText, postPropsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<postPropsType>
    addPost: () =>void
    newPostText: string
    updateNewPostText: (postText: string) =>void
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost ={props.addPost} posts={props.posts} newPostText={props.newPostText} updateNewPostText = {updateNewPostText} />
        </div>
    )
}
export default Profile;
