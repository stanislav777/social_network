import React from "react";
import Dialogs from "./Dialogs";
import {RootReduxState} from "../../redux/redax-store";
import {InitialDialogsState, sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-rerducer';
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialDialogsState
    isAuth: boolean
}

export let mapStateToProps = (state: RootReduxState): MapStateToPropsType =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export let  mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType  => {
    return {
        updateNewMessageBody: (body: string) =>{
            dispatch(updateNewMessageTextCreator(body))
        },
        sendMessage: () => {dispatch (sendMessageCreator())}

    }
}


export default  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps,mapDispatchToProps)(Dialogs);

