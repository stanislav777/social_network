import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../../Сommon/Preloader/Preloader';
import {ProfileType} from '../../../../redux/profile-reducer';

type ProfileInfoPropsType = {
    profile: ProfileType

}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile){
     return  <Preloader/>
    }

    return (
        <div className={s.content}>
            <img src='https://www.artd.ru/wp-content/uploads/2018/12/stydiya-tpl_01-01.jpg'/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>


        </div>
    )
}
export default ProfileInfo;