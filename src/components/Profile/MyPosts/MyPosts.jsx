import React from 'react';
import s from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElements = props.profilePage.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let textArea = React.createRef();

    function onAddPost() {
        props.addPost()
    }

    function onPostChange(){
        let updateText = textArea.current.value;
        props.postChange(updateText)
    }

    return(
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <input type="text" ref={textArea} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <button onClick={ onAddPost }>Add post</button>
            <div>new post</div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;