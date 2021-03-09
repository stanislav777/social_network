import React from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import store from '../../redux/state';


const Profile = () => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
