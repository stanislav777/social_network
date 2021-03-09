import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redax-store";
import App from "./App";


const reRenderDomTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById("root"));
}

reRenderDomTree()

// store.subscribe(reRenderDomTree);

