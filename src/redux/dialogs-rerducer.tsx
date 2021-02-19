import {PostPropsType, sendMessageCreator, updateNewMessageTextCreator} from "./state";

const dialogsReducer = (state, action) => {

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