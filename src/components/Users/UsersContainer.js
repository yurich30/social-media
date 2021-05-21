import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow, toggleFollowingInProgress, getUsers} from '../../redux/usersPageReducer'
import * as axios from 'axios'
import React from 'react'
import './Users.css'
import Users from './Users'
import { usersAPI } from '../../api/api'

class UsersAPI extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onCurrentPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber)
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
        toggleFollowingInProgress,
        getUsers,
    }
    )(UsersAPI)

export default UsersContainer