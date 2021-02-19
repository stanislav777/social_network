import React from "react";
import "./index.css";
import store, {rootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const reRenderDomTree = (state: rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>

        </BrowserRouter>, document.getElementById("root"));
}

reRenderDomTree(store.getState())

store.subscriber(reRenderDomTree);