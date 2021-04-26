import { connect } from 'react-redux'
import { followActionCreator, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowActionCreator } from '../../redux/usersPageReducer'
import * as axios from 'axios'
import React from 'react'
import './Users.css'
import Users from './Users'

class UsersAPI extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onCurrentPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber }&count=${this.props.pageSize}`)
        .then(response => this.props.setUsers(response.data.items))
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
        /> 
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage
})

const mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {dispatch(followActionCreator(userId))},
        unfollow:(userId) => {dispatch(unfollowActionCreator(userId))},
        setUsers:(users) => {dispatch(setUsersAC(users))},
        setCurrentPage:(pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsers:(total) => {dispatch(setTotalUsersAC(total))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer