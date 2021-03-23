import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/userspng.jpg';
import {UserType} from '../../redux/state';


export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
            props.users.map(el => <div key={el.id}>
          <span>
               <div>
                   <img src={el.photos.small != null ? el.photos.small : userPhoto} className={styles.userPhoto}/>
               </div>
              <div>
                  {el.followed
                      ? <button onClick={() => {
                          props.follow(el.id)
                      }}> Follow </button>
                      : <button onClick={() => {
                          props.unfollow(el.id)
                      }}> unFollow </button>}
              </div>
          </span>
                <span>
              <span>
                  <div>{el.name}</div>
                  <div> {el.status} </div>
              </span>
          </span>
            </div>)
        }
    </div>
};
export default Users;