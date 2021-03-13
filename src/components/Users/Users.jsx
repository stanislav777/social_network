import React from "react";
import styles from './users.module.css';

export type UsersPropsType = {
    follow: (userId) =>void
        unfollow: (userId) => void
    users: []
        setUsers: (users) => void

}


function Users (props:UsersPropsType) {

    if (props.users.length ===0) {
        props.setUsers ([
            {id: 1, photoUrl:'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg', followed: true, fullName: 'Bob', status: 'Director', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl:'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg',followed: true, fullName: 'Jon', status: 'worker', location: {city: 'Chikago', country: 'USA'}},
            {id: 3, photoUrl:'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg',followed: true, fullName: 'Bob', status: 'Director', location: {city: 'Minsk', country: 'Belarus'}},
        ])
    }


    return <div>
        {
          props.users.map(el => <div key = {el.id} >
          <span>
               <div>
                   <img src = {el.photoUrl} className={styles.userPhoto}  />
               </div>
              <div>
                  { el.followed
                      ?  <button onClick={() => {props.follow(el.id)}}> unFollow </button>
                      : <button onClick={() => {props.unfollow(el.id)}}> Follow </button>}
              </div>
          </span>
          <span>
              <span>
                  <div>{el.fullName}</div>
                  <div> {el.status} </div>
              </span>
              <span>
                  <div>{el.location.city}</div>
                  <div>{el.location.country}</div>
              </span>
          </span>

          </div>)
        }
    </div>
}
export default Users;