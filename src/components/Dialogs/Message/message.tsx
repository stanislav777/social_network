import React from "react";

import s from "./../Dialogs.module.css";


type MessagesItemPropsType = {
    message: string
    id: number
}

const Message = (props: MessagesItemPropsType) => {

    return <div className={s.dialog}>{props.message}</div>

}

export default Message;