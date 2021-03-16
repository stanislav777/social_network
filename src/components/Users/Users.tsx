import React from 'react';
import styles from './users.module.css';
import {UserType} from '../../redux/state';
import axios from 'axios';
import userPhoto from '../../assets/images/userspng.jpg'

export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void

}


export default function Users(props: UsersPropsType) {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    //         props.setUsers([
    //             {
    //                 id: 0,
    //                 photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg',
    //                 followed: true,
    //                 fullName: 'Bob',
    //                 status: 'Director',
    //                 location: {city: 'Minsk', country: 'Belarus'}
    //             },
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg',
    //                 followed: true,
    //                 fullName: 'Jon',
    //                 status: 'Worker',
    //                 location: {city: 'Chikago', country: 'USA'}
    //             },
    //             {
    //                 id: 3,
    //                 photoUrl: 'https://www.ejin.ru/wp-content/uploads/2018/10/3w8tfsi8ccs.jpg',
    //                 followed: true,
    //                 fullName: 'Bim',
    //                 status: 'Solder',
    //                 location: {city: 'Minsk', country: 'Belarus'}
    //             },
    //         ])



        return <div>
            <button onClick={getUsers}> getUsers</button>
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
                      }}> unFollow </button>
                      : <button onClick={() => {
                          props.unfollow(el.id)
                      }}> Follow </button>}
              </div>
          </span>
                    <span>
              <span>
                  <div>{el.fullName}</div>
                  <div> {el.status} </div>
              </span>
              {/*<span>*/}
              {/*    <div>{el.location.city}</div>*/}
              {/*    <div>{el.location.country}</div>*/}
              {/*</span>*/}
          </span>

                </div>)
            }
        </div>
}

// export default Users;