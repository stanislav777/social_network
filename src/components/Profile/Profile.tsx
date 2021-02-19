import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, postPropsType} from "../../redux/state";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    posts: Array<postPropsType>
    dispatch: (action: ActionsTypes ) =>void
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
