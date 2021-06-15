import axios from 'axios';
import {UserType} from '../redux/state';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '97242930-04d6-45fa-bc93-35068e186994'}
})


export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },

    unfolow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    }
}

export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

// createTodolist(title: string) {
//     const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title});
//     return promise;