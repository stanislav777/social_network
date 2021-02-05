import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {BrowserRouter} from "react-router-dom";
import {updateNewPostText, addPost, rootStateType} from "./redux/state";


export const reRenderDomTree = (state:rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} />
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById("root")
    );
}

