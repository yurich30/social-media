import * as axios from 'axios'
import React from 'react'

const Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
        if(props.users.length === 0){
            props.setUsers(response.data.items)
        }
    })

    return <div>
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small} alt=""/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
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
        {/* here will be users */}
    </div>
}

export default Users