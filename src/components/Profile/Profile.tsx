import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPostText, postPropsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<postPropsType>
    dispatch: () =>void
    newPostText: string

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.posts} newPostText={props.newPostText}/>
        </div>
    )
}
export default Profile;
