
import {reRenderDomTree} from "../render";

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

export let state: rootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello. How are you", likesCounts: 5},
            {id: 2, message: "Yo. I am busy now.", likesCounts: 3},
            {id: 3, message: "Hello. My friend", likesCounts: 9600},
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
}

export let addPost = () =>{
    const newPost: postPropsType = {
        id:4,
        message: (state.profilePage.newPostText),
        likesCounts: 45
    }
  state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ""
    reRenderDomTree(state);
}

export let updateNewPostText = (postText: string) =>{
       state.profilePage.newPostText = postText;
    reRenderDomTree(state);
}

export default state;