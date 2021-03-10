import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-rerducer";
import {useReducer} from 'react';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: useReducer,
    // sidebarReducer

});


export type RootReduxState = ReturnType<typeof reducers>


let store = createStore(reducers);

export  default store;