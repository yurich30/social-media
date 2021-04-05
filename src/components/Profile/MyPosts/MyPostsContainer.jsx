import React from 'react';
import { addPostActionCreator,  updatePostTextActionCreator} from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    
    let profilePage = props.store.getState().profilePage
    // const dispatch = props.store.dispatch()

    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }

    function postChange(text){
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return(<MyPosts 
        profilePage={profilePage}
        newPostText={profilePage.newPostText}
        addPost={addPost}
        postChange={postChange}
        // dispatch={dispatch}
    />);
}

export default MyPostsContainer;