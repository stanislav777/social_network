
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

export type profilePageType ={
    posts: Array <postPropsType>
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

let store = {

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

      addPost() {
        const newPost: postPropsType = {
            id: 4,
            message: (store._state.profilePage.newPostText),
            likesCounts: 45
        }
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = ""
        _callSubscriber();
    },

      updateNewPostText (postText: string)  {
          this._state.profilePage.newPostText = postText;
        _callSubscriber();
    },

     subscriber (callback: () => void) {
       _callSubscriber = callback;
    }

}
export default store;