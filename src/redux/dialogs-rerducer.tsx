import {PostPropsType} from "./state";

 const dialogsReducer = (state, action) => {

    if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
        state.newMessageText = action.body;

    } else if (action.type === "SEND_MESSAGE") {
        let body = state.newMessageText
        state.newMessageText = ""
        state.messages.push({id: 6, message: body});
    }

    return state;
}

export default dialogsReducer;