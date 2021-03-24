import React from 'react';
import {follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow} from '../../redux/users-reducer';
import {RootReduxState} from '../../redux/redax-store';
import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import {UserType} from '../../redux/state';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId: number) => {
//
//             dispatch(unfollowAC(userId))
//
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//     }
//
// }

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching: setIsFetching
})(UsersAPIComponent);