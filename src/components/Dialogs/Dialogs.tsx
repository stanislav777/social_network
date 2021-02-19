import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/message";
import DialogItem from "./DialogItem/dialogItem";
import {
    dialogPropsType,
    messagePropsType,
    sendMessageCreator,
    StoreType,
    updateNewMessageTextCreator
} from "../../redux/state";

type  DialogsPropsType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
    store: StoreType
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogs = props.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name}/>
    )
    let messages = props.messages.map((m) =>
        <Message id={m.id} message={m.message}/>)

    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageTextCreator(body))
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
