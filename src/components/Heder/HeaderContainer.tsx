import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserDate} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true})
            .then(response => {
                if (response.data.resultCode===0) {
                    let {userId,login, email} = response.data.data;
                    this.props.setAuthUserDate(userId,login, email);
                }
            });
    }

    render() {
        return  <Header {...this.props}/>

    }
};


let mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setAuthUserDate})(HeaderContainer);
