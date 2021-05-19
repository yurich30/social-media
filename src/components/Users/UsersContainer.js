import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow, toggleFollowingInProgress} from '../../redux/usersPageReducer'
import * as axios from 'axios'
import React from 'react'
import './Users.css'
import Users from './Users'
import { usersAPI } from '../../api/api'

class UsersAPI extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        //     .then(response => {
        //         this.props.setUsers(response.data.items)
        //         this.props.setTotalUsers(response.data.totalCount)
        //         this.props.toggleIsFetching(false)
        //     })
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsers(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onCurrentPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber }&count=${this.props.pageSize}`, {withCredentials: true})
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render(){
        return <Users 
            users={this.props.users}
            onCurrentPageChange={this.onCurrentPageChange}
            currentPage={this.props.currentPage}
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetch={this.props.isFetch}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
        /> 
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetch: state.usersPage.isFetch,
    followingInProgress: state.usersPage.followingInProgress
})

const UsersContainer = connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        toggleIsFetching,
        toggleFollowingInProgress
    }
    )(UsersAPI)

export default UsersContainer