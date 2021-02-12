import React from "react";
import "./index.css";
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


 const reRenderDomTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText = {store.updateNewPostText.bind(store)} />
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById("root")
    );
}

reRenderDomTree()

store.subscriber(reRenderDomTree);