import { connect } from 'react-redux'
import { followActionCreator, setUsersAC, unfollowActionCreator } from '../../redux/usersPageReducer'
import Users from './Users'

const mapStateToProps = (state) => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {dispatch(followActionCreator(userId))},
        unfollow:(userId) => {dispatch(unfollowActionCreator(userId))},
        setUsers:(users) => {dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer