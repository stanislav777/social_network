import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-rerducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebarReducer
});


export type RootReduxState = ReturnType<typeof reducers>


let store = createStore(reducers);

export  default store;