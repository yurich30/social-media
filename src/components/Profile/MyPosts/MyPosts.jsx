import React from 'react';
import profile from'./MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>my post
            <div>new post</div>
            <div className={profile.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;