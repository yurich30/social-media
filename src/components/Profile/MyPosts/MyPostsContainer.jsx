import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator,  updatePostTextActionCreator} from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {
    
//     return <StoreContext.Consumer>
//         {(store) => {
//             function addPost() {
//                 store.dispatch(addPostActionCreator());
//             }
        
//             function postChange(text){
//                 store.dispatch(updatePostTextActionCreator(text));
//             }
        
//             return(<MyPosts 
//                 profilePage={store.getState().profilePage}
//                 newPostText={store.getState().profilePage.newPostText}
//                 addPost={addPost}
//                 postChange={postChange}
//             />);
//         }}
//     </StoreContext.Consumer>
// }
const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        postChange: (text) => {dispatch(updatePostTextActionCreator(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;