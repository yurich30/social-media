import React from 'react';
import profile from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>my post
            <div>new post</div>
            <div className={profile.posts}>
                <Post message="Hi. How are you?" likeCount='3'/>
                <Post message='It`s my first post' likeCount='5'/>
                <Post message='Hi, it`s my second post' likeCount='7'/>
            </div>
        </div>
    );
}

export default MyPosts;