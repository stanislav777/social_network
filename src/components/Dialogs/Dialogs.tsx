import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from './Message/message';
import DialogItem from './DialogItem/dialogItem';

export type MessagesPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}

export type DialogPropsType =
    {
        id: number
        name: string
    }

export type MessagePropsType =
    {
        id: number
        message: string
    }

type  DialogsPropsType = {
    updateNewMessageBody: (body:string)=> void
    sendMessage: ()=> void
    dialogsPage: MessagesPageType
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

let dialogsPage = props.dialogsPage

    let dialogs = dialogsPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>
    )
    let messages = dialogsPage.messages.map((m) => <Message key={m.id} id={m.id} message={m.message}/>)

    let newMessageText = dialogsPage.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    // if(!props.isAuth){ return <Redirect to={'/login'}/>}

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
