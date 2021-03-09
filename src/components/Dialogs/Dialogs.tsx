import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/message";
import DialogItem from "./DialogItem/dialogItem";
import {MessagesPageType} from "../../redux/state";

type  DialogsPropsType = {
    updateNewMessageBody: (body:string)=> void
    sendMessage: ()=> void
    dialogsPage: MessagesPageType
}

const Dialogs = (props: DialogsPropsType) => {

let dialogsPage = props.dialogsPage

    let dialogs = dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>
    )
    let messages = dialogsPage.messages.map((m) => <Message id={m.id} message={m.message}/>)

    let newMessageText = dialogsPage.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
            <textarea value={newMessageText}
                      placeholder={"Enter you message"}

                      onChange={onNewMessageChange}> </textarea>

            </div>
            <div>
                <button onClick={onSendMessageClick}>add message</button>
            </div>
        </div>
    )
}
export default Dialogs;
