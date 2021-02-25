import {ActionsTypes, sendMessageCreator, StoreType, updateNewMessageTextCreator} from "./state";

let initialState = {
    dialogs: [
        {id: 1, name: "Stanislav"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Misha"},
        {id: 5, name: "Roma"},
    ],
    messages: [
        {id: 1, message: "Hi. How are you"},
        {id: 2, message: "All right"},
        {id: 3, message: "Good day"},
        {id: 4, message: "Hi. How are you"},
    ],
    newMessageText: ""
}

export type InitialDialogsState = typeof initialState


const dialogsReducer = (state: InitialDialogsState = initialState , action: ActionsTypes): InitialDialogsState => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_TEXT":
            state.newMessageText = action.body;
            return state;

        case "SEND_MESSAGE":
            let body = state.newMessageText
            state.newMessageText = ""
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextCreator>
export type SendMessageActionType = ReturnType<typeof sendMessageCreator>

export default dialogsReducer;