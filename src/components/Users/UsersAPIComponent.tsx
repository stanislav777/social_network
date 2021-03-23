import React from 'react';
import {UserType} from '../../redux/state';
import axios from 'axios';
import Users from './Users';
import Preloder from '../Сommon/Preloader/Preloader';

export type UsersAPIComponentPropsType = {

    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFetching:(isFetching:boolean)=> void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    isFetching: boolean


}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            debugger
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloder/> : null }
            <Users follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}


            />
        </>
    };
}


export default UsersAPIComponent;