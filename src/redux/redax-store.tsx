import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-rerducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import  thunkMiddleware  from 'redux-thunk';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

});


export type RootReduxState = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware());

// @ts-ignore
window.store = store


export  default store;