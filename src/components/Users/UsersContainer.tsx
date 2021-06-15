import React from 'react';
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowThunkCreator
} from '../../redux/users-reducer';
import {RootReduxState} from '../../redux/redax-store';
import {connect} from 'react-redux';
import {UserType} from '../../redux/state';
import {usersAPI} from '../../api/API';
import Preloder from '../Сommon/Preloader/Preloader';
import Users from './Users';

//
// export type UsersAPIComponentPropsType = {
//     setUsers: (users: Array<UserType>) => void
//     setTotalCount: (totalUsersCount: number) => void
//     setCurrentPage: (currentPage: number) => void
//     currentPage: number
//     followThunkCreator: (userId: number) => void
//     unfollowThunkCreator: (userId: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     isFetching: boolean
//     toggleFollowingProgress:(isFetching: boolean) => void
//     followingInProgress: []
//     getUsersThunkCreator:(currentPage:number,pageSize:number) => void
//     onPageChanged: (pageNumber: number) => void
//
// }


export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloder/> : null}
            <Users followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    };
}


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

let mapStateToProps = (state: RootReduxState): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


type MapDispatchToPropsType = {
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
})(UsersContainer);