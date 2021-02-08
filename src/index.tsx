import React from "react";
import "./index.css";
import state, {addPost, rootStateType, subscriber, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


 const reRenderDomTree = (state:rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} />
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById("root")
    );
}

reRenderDomTree(state)

subscriber(reRenderDomTree);