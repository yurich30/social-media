import React from 'react';
import profile from'./Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={profile.content}>
            <div>
            <img src="https://specials-images.forbesimg.com/imageserve/5ed424a52259c9000769e94c/960x0.jpg?cropX1=120&cropX2=1267&cropY1=96&cropY2=668" alt=""/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;