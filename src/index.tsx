import React from "react";
import "./index.css";
import {addPost, rootStateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


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