import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/message";
import DialogItem from "./DialogItem/dialogItem";
import {dialogPropsType, messagePropsType} from "../../redux/state";

type  DialogsPropsType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogs = props.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name}/>
    )
    let messages = props.messages.map((m) =>
        <Message id={m.id} message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
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
            <textarea ref={newMessageElement}>Message</textarea>
            </div>
                <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}
export default Dialogs;
