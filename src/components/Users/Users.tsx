import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/userspng.jpg';
import {NavLink} from 'react-router-dom';
import { UserType } from '../../redux/users-reducer';


export type UsersPropsType = {
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
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
                return <span key={el} className={props.currentPage === el ? styles.selectedPage : ''}
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
                   <img alt="ph" src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                   </NavLink>
               </div>
              <div>
                  {user.followed

                      ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unfollowThunkCreator(user.id)
                      }}> unFollow </button>

                      : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                          props.followThunkCreator(user.id)
                      }}> Follow </button>}
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