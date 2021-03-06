import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {RootReduxState} from "../../redux/redax-store";
import {InitialDialogsState, sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-rerducer';
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type MapStateToPropsType = {
    dialogsPage: InitialDialogsState
    // isAuth: boolean
}

export let mapStateToProps = (state: RootReduxState): MapStateToPropsType =>{
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
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

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
// let DialogsContainer =  connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer


export default compose<ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
