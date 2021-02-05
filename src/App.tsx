import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {rootStateType} from "./redux/state";


type  AppPropsType = {

    addPost: () =>void
    state: rootStateType
    updateNewPostText: (postText: string) =>void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                <Route path={"/profile"} render={() => <Profile addPost={props.addPost} posts={props.state.profilePage.posts} updateNewPostText = {props.updateNewPostText} newPostText = {props.state.profilePage.newPostText}/>}/>
            </div>
        </div>

    )
}


export default App;

