import React from 'react' 
import * as axios from 'axios'
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader';
import avatarPhoto from '../../media/avatar.png'
import './Users.css'

const Users = (props) => {
    let totalPages = Math.ceil(props.totalUsers/props.pageSize)

    let pages = [];

    for(let i=1; i <= totalPages; i++){
        pages.push(i)
    }

    return(
        <div>
        {
            props.isFetch ? <Preloader/> : null
        }
        {
            pages.map(p => {
                return <span 
                className={props.currentPage === p ? "active" : ""}
                onClick={() => props.onCurrentPageChange(p)}
                >{p}</span>
            })
        }
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img  className='user__avatar' src={!user.photos.small ? avatarPhoto : user.photos.small} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, 
                            {
                                withCredentials: true,
                                headers: {"API-KEY": "336e5163-4305-4527-b245-59ad1b7b0990"}
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.unfollow(user.id)
                                    }
                                })
                        }}>Unfollow</button> 
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, 
                            {
                                withCredentials: true,
                                headers: {"API-KEY": "336e5163-4305-4527-b245-59ad1b7b0990"}
                            })
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.follow(user.id)
                                    }
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{"user.status"}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city "}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}

export default Users