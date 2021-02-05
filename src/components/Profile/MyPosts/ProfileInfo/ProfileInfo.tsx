import React from "react";
import s from "./ProfileInfo.module.css";

type ProfileInfoPropsType = {}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.content}>
            <img src='https://www.artd.ru/wp-content/uploads/2018/12/stydiya-tpl_01-01.jpg'/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>


        </div>
    )
}
export default ProfileInfo;