import React from "react";
import "./App.css";
import Header from "./components/Heder/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, rootStateType, StoreType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                <Route path={"/profile"} render={() => <Profile />}/>
            </div>
        </div>

    )
}


export default App;

