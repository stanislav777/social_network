import React from 'react';
import {followAC, InitialUserState, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {RootReduxState} from '../../redux/redax-store';
import Users from './Users';
import {connect} from 'react-redux';
import {UserType} from '../../redux/state';

type MapStateToProps = {
    users: Array<UserType>
}

let mapStateToProps = (state: RootReduxState): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);