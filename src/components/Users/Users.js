import React from 'react' 
import Preloader from '../common/Preloader';

const Users = (props) => {
    console.log(props);
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
                        <img src={user.photos.small} alt=""/>
                    </div>
                    <div>
                        {user.followed 
                        ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
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