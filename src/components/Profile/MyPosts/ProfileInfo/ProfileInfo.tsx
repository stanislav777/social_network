import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../../Сommon/Preloader/Preloader';
import {ProfileType} from '../../../../redux/profile-reducer';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType

}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile){
     return  <Preloader/>
    }

    return (
        <div >
            <img src='https://www.artd.ru/wp-content/uploads/2018/12/stydiya-tpl_01-01.jpg' width="1000"/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} width="150" height="150" />
               <div>
                   <ProfileStatus status={"I love the life!!!"}/>
               </div>


            </div>


        </div>
    )
}
export default ProfileInfo;