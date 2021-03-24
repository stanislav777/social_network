import React from 'react';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReduxState} from '../../../redux/redax-store';
import {addPostAC, PostPropsType, updateNewPostTextAC} from '../../../redux/profile-reducer';


// type MyPostsContainerPropsType = {
//     store: StoreType
// }
//
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//
//     let onPostChange = (postText: string) => {
//         let action = updateNewPostTextActionCreator(postText);
//         props.store.dispatch(action)
//     }
//
//
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//         />
//     )
// }
type MapStateToPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

let mapStateToProps = (state: RootReduxState ): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchToPropsType = {
    updateNewPostText: (postText: string) => void
    addPost: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (postText) => {
            let action = updateNewPostTextAC(postText);
            dispatch(action)
        },

        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

