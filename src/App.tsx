import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, rootStateType, StoreType} from "./redux/state";


type  AppPropsType = {
    store: StoreType
    state: rootStateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                messages={props.state.dialogsPage.messages}
                                                                newMessageText={props.state.dialogsPage.newMessageText}
                                                                store={props.store}/>}/>
                <Route path={"/profile"}
                       render={() => <Profile dispatch={props.store.dispatch.bind(props.store)}
                                              posts={props.state.profilePage.posts}
                                              newPostText={props.state.profilePage.newPostText}/>}/>
            </div>
        </div>

    )
}


export default App;

