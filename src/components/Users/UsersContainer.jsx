import React from "react";
import {followAC, InitialUserState, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootReduxState} from "../../redux/redax-store";
import Users from "./Users";
import {connect} from "react-redux";

type MapStateToProps = {
  users: InitialUserState
}

let mapStateToProps = (state: RootReduxState): MapStateToProps => {
    return {
     users: state.usersPage.users
    }
}


type MapDispatchToPropsType = {
    followAC: (userId: string) => void
    unfollowAC: (userId: string) => void
    setUsersAC: (users) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
     follow: (userId) => {
         dispatch(followAC(userId))
     },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);