import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCounts: number
    id: number
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false"
                    alt="ava"/>
                {props.message}
                <div>
                {props.likesCounts} <span> like</span>
              </div>
            </div>
        </div>
    )
}

export default Post;