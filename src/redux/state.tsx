import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from './profile-reducer';
import dialogsReducer, {SendMessageActionType, UpdateNewMessageTextActionType} from './dialogs-rerducer';
import {followACType, setUsersACType, unfollowACType} from './users-reducer';

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


export type PostPropsType =
    {
        id: number
        message: string
        likesCounts: number
    }

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type MessagesPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageText: string
}
// export type usersPageType = {
//     users: Array<userType>
// }
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}


export type rootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: MessagesPageType,
    // usersPage: usersPageType
}

export type ActionsTypes = UpdateNewPostTextActionType | AddPostActionType | UpdateNewMessageTextActionType |
    SendMessageActionType | followACType | unfollowACType | setUsersACType


export const updateNewPostTextActionCreator = (postText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: postText
    } as const
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST',
    } as const
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


export type  StoreType = {
    _state: rootStateType
    getState: () => rootStateType
    subscriber: any
    dispatch: (action: ActionsTypes) => void
    _callSubscriber: (state: rootStateType) => void
}


let store: StoreType = {

    _state: /*rootStateType*/ {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello. How are you', likesCounts: 2184},
                {id: 2, message: 'Yo. I am busy now.', likesCounts: 45},
                {id: 3, message: 'Hello. i am your friend', likesCounts: 56},
            ],
            newPostText: ''
        },
        dialogsPage: {
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.dialogsPage = sidebarReducer( this._state.dialogsPage, action )

        this._callSubscriber(this._state);

    }
}

export default store;