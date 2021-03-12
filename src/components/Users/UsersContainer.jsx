import React from "react";
import {followAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
     users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatc) => {
    return{
     follow: (userId) => {
         dispatc(followAC(userId))
     },
        unfollow: (userId) => {
            dispatc(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatc(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);