import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserDate} from '../../redux/auth-reducer';
import {RootReduxState} from '../../redux/redax-store';


export type HeaderContainerPropsType = {
    isAuth: boolean
    // id: number,
    login: string,
    // email: string
    setAuthUserDate: (id: number,
                      login: string,
                      email: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

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
};

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

export default connect(mapStateToProps, {setAuthUserDate})(HeaderContainer);
