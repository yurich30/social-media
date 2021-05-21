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

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsers(data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}

export default usersPageReducer