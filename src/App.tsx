import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {rootStateType, StoreType} from "./redux/state";


type  AppPropsType = {

    dispatch: () =>void
    store: StoreType

}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.store._state.messagesPage.dialogs}
                                                                messages={props.store._state.messagesPage.messages}/>}/>
                <Route path={"/profile"}
                       render={() => <Profile dispatch={props.dispatch} posts={props.store._state.profilePage.posts}
                                              newPostText={props.store._state.profilePage.newPostText}/>}/>
            </div>
        </div>

    )
}


export default App;

