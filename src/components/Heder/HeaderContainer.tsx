import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserDate} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redax-store';
import {authAPI} from '../../api/API';


export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string,
    setAuthUserDate: (id: number,
                      login: string,
                      email: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.me().then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserDate(id, login, email);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserDate})(HeaderContainer);
