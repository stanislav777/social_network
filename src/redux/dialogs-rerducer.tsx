

let initialState = {
    dialogs: [
        {id: 1, name: 'Stanislav'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Misha'},
        {id: 5, name: 'Roma'},
    ],
    messages: [
        {id: 1, message: 'Hi. How are you'},
        {id: 2, message: 'All right'},
        {id: 3, message: 'Good day'},
        {id: 4, message: 'Hi. How are you'},
    ],
    newMessageText: ''
}

export type InitialDialogsState = typeof initialState


const dialogsReducer = (state: InitialDialogsState = initialState, action: ActionsType): InitialDialogsState => {

    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {...state, newMessageText: action.body};

        case 'SEND_MESSAGE':
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const updateNewMessageTextCreator = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        body
    } as const
}
export const sendMessageCreator = () => {
    return {type: 'SEND_MESSAGE'} as const
}
type ActionsType =
    | ReturnType<typeof updateNewMessageTextCreator>
    | ReturnType<typeof sendMessageCreator>

export default dialogsReducer;