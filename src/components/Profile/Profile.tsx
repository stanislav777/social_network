import React, { FC } from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';

type PropsType  = {
    profile: ProfileType
}
const Profile: FC<PropsType> = ({profile}) => {


    return (
        <div>
            <ProfileInfo profile = {profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
