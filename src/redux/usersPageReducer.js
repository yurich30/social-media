import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


let initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    pageSize: 10,
    isFetch: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if(u.id ===action.userId){
                        return{...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS: 
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS: 
            return {...state, totalUsers: action.totalUsers}
        case TOGGLE_IS_FETCHING: 
            return {...state, isFetch: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id) 
            }
        default: return state
    }
}

export const followAccept = (userId) => ({type: FOLLOW, userId})
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsers(data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
                                usersAPI.unfollow(userId).then(resultCode => {
                                    if(resultCode === 0){
                                        dispatch(unfollowAccept(userId))
                                    }
                                    dispatch(toggleFollowingInProgress(false, userId))
                            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
                                usersAPI.follow(userId).then(resultCode => {
                                    if(resultCode === 0){
                                        dispatch(followAccept(userId))
                                    }
                                    dispatch(toggleFollowingInProgress(false, userId))
                            })
    }
}

export default usersPageReducer