import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserDateTC} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redax-store';


export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDateTC();
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

type MapDispatchToPropsType = {
    getAuthUserDateTC: () => void
}

export default connect(mapStateToProps, {getAuthUserDateTC})(HeaderContainer);
