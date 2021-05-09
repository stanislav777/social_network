import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/userspng.jpg';
import {UserType} from '../../redux/state';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    toggleFollowingProgress: (isFetching: boolean,userId: number) => void
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(el => {
                return <span className={props.currentPage === el ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(el)
                             }}> {el} </span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
          <span>
               <div>
                   <NavLink to={'/profile/' + user.id}>
                   <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                   </NavLink>
               </div>
              <div>
                  {user.followed
                      ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                          props.toggleFollowingProgress(true, user.id);
                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                              {withCredentials: true, headers: {'API-KEY': '97242930-04d6-45fa-bc93-35068e186994'}})
                              .then(response => {
                                  if (response.data.resultCode === 0) {
                                      props.follow(user.id)
                                  }
                                  props.toggleFollowingProgress(false,user.id);
                              })

                      }}> Follow </button>
                      : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                          props.toggleFollowingProgress(true,user.id);
                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                              {withCredentials: true, headers: {'API-KEY': '97242930-04d6-45fa-bc93-35068e186994'}})
                              .then(response => {
                                  if (response.data.resultCode === 0) {
                                      props.unfollow(user.id)
                                  }
                                  props.toggleFollowingProgress(false,user.id);
                              })
                      }}> unFollow </button>}
              </div>
          </span>
                <span>
              <span>
                  <div>{user.name}</div>
                  <div> {user.status} </div>
              </span>
          </span>
            </div>)
        }
    </div>
};
export default Users;