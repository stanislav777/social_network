import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {RootReduxState} from '../redux/redax-store';


type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps}=props
        if(!isAuth){ return <Redirect to={'/login'}/>}
        return <Component  {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}
