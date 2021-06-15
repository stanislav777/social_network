import React from 'react';
import {UserType} from '../../redux/state';
import Users from './Users';
import Preloder from '../Сommon/Preloader/Preloader';
import {usersAPI} from '../../api/API';
//
// export type UsersAPIComponentPropsType = {
//
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
//
//
// }
//
// class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
//
//     componentDidMount() {
//         this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
//         // this.props.toggleIsFetching(true);
//         // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//         //         this.props.toggleIsFetching(false);
//         //         this.props.setUsers(data.items);
//         //         this.props.setTotalCount(data.totalCount)
//         //     })
//     }
//
//     onPageChanged = (pageNumber: number) => {
//         this.props.toggleIsFetching(true);
//         this.props.setCurrentPage(pageNumber);
//         usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items)
//         })
//     }
//
//     render() {
//         return <>
//
//             {this.props.isFetching ? <Preloder/> : null}
//             <Users followThunkCreator={this.props.followThunkCreator}
//                    unfollowThunkCreator={this.props.unfollowThunkCreator}
//                    onPageChanged={this.onPageChanged}
//                    users={this.props.users}
//                    pageSize={this.props.pageSize}
//                    totalUsersCount={this.props.totalUsersCount}
//                    currentPage={this.props.currentPage}
//                    toggleFollowingProgress={this.props.toggleFollowingProgress}
//                    followingInProgress={this.props.followingInProgress}
//
//
//
//             />
//         </>
//     };
// }
//
//
// export default UsersAPIComponent;