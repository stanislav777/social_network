const ADD_POST = "addPost"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export type updateNewPostTextActionType = ReturnType<typeof  updateNewPostTextActionCreator>

export type addPostActionType = {
    type: "ADD_POST"
    postText: string
}

export type ActionsTypes = addPostActionType | updateNewPostTextActionType


let _callSubscriber = () => {

}

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
}


export type rootStateType = {
    profilePage: profilePageType,
    messagesPage: messagesPageType,
}

export type  StoreType = {
    _state: rootStateType
    getState: () => rootStateType
    subscriber: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void

}

export const updateNewPostTextActionCreator = (postText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: postText
    } as const
}

export const addPostActionCreator = (postText: string): addPostActionType => {
    return {
        type: "ADD_POST",
        postText: postText
    } as const
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
        messagesPage: {
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
        }
    },
    getState() {
        return this._state
    },
    subscriber(callback) {
        _callSubscriber = callback;
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
            _callSubscriber();
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.postText;
            _callSubscriber();
        }
    }
}

export default store;