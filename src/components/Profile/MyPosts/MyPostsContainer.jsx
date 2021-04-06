import React from 'react';
import { addPostActionCreator,  updatePostTextActionCreator} from '../../../redux/profilePageReducer'
import StoreContext from '../../../redux/StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
    
    return <StoreContext.Consumer>
        {(store) => {
            function addPost() {
                store.dispatch(addPostActionCreator());
            }
        
            function postChange(text){
                store.dispatch(updatePostTextActionCreator(text));
            }
        
            return(<MyPosts 
                profilePage={store.getState().profilePage}
                newPostText={store.getState().profilePage.newPostText}
                addPost={addPost}
                postChange={postChange}
            />);
        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer;