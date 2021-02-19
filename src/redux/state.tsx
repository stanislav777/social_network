// const ADD_POST = "addPost"
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
//
//
// const UPDATE_NEW_MESSAGE_TEXT  = "UPDATE_NEW_MESSAGE_TEXT"
// const SEND_MESSAGE =  "UPDATE_NEW_MESSAGE_TEXT"





export type dialogPropsType =
    {
        id: number
        name: string
    }

export type messagePropsType =
    {
        id: number
        message: string
    }


export type postPropsType =
    {
        id: number
        message: string
        likesCounts: number
    }

export type profilePageType = {
    posts: Array<postPropsType>
    newPostText: string
}

export type messagesPageType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
    newMessageText: string
}


export type rootStateType = {
    profilePage: profilePageType,
    dialogsPage: messagesPageType,
}


export type UpdateNewPostTextActionType = ReturnType<typeof  updateNewPostTextActionCreator>
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextCreator>
export type SendMessageActionType = ReturnType<typeof sendMessageCreator>


export type ActionsTypes = UpdateNewPostTextActionType | AddPostActionType | UpdateNewMessageTextActionType | SendMessageActionType


export const updateNewPostTextActionCreator = (postText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: postText
    } as const
}

export const addPostActionCreator = () => {
    return {
        type: "ADD_POST",
    } as const
}

export const updateNewMessageTextCreator = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        body
    } as const
}
export const sendMessageCreator = () => {
    return {type: "SEND_MESSAGE"} as const
}


export type  StoreType = {
    _state: rootStateType
    getState: () => rootStateType
    subscriber:  any
    dispatch: (action: ActionsTypes) => void
    _callSubscriber: (state: rootStateType) => void

}


let store: StoreType = {

    _state: /*rootStateType*/ {
        profilePage: {
            posts: [
                {id: 1, message: "Hello. How are you", likesCounts: 2184},
                {id: 2, message: "Yo. I am busy now.", likesCounts: 45},
                {id: 3, message: "Hello. i am your friend", likesCounts: 56},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    subscriber(callback: any) {
        this._callSubscriber = callback;
    },
    _callSubscriber(state: rootStateType) {
        console.log('state changed')
    },
    dispatch(action) {
        if (action.type === "ADD_POST") {
            const newPost: postPropsType = {
                id: 4,
                message: (store._state.profilePage.newPostText),
                likesCounts: 45
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ""
            this._state.dialogsPage.messages.push({id:6, message:body }) ;
            this._callSubscriber(this._state);
        }

    }
}

export default store;