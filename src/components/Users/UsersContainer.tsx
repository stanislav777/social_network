import React from 'react';
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowThunkCreator, UserType
} from '../../redux/users-reducer';
import {RootReduxState} from '../../redux/redax-store';
import {connect} from 'react-redux';
import Preloder from '../Сommon/Preloader/Preloader';
import Users from './Users';


export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReduxState>(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator,
})(UsersContainer);