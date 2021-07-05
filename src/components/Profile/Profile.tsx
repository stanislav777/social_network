import React, {FC} from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type PropsType  = {
    profile: ProfileType
    isAuth: boolean
    status: string
}
const Profile: FC<PropsType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile = {profile} status={props.status} updateStatusThunkCreator = {props.updateStatusThunkCreator}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
