import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



const Profile = () => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
