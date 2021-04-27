import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div>
            <img src="https://specials-images.forbesimg.com/imageserve/5ed424a52259c9000769e94c/960x0.jpg?cropX1=120&cropX2=1267&cropY1=96&cropY2=668" alt=""/>
            </div>
            <div className={s.profileInfo}><img src={props.profile.photos.small} alt=""/></div>
            <div>{props.profile.aboutMe}</div>
            <div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.mainLink}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.facebook}</div>
            </div>
            <div></div>
        </div>
    );
}

export default ProfileInfo;