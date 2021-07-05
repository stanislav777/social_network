import React, {FC} from 'react';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type PropsType  = {
    profile: ProfileType
    isAuth: boolean
    status: string
    updateStatusTC: ()=>void

}
const Profile: FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile = {props.profile} status={props.status} updateStatusTC = {props.updateStatusTC}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
