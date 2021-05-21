import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state
    }
}

export const setAuthUserDataAC = (userID, email, login) => ({type:SET_USER_DATA, data: {userID, email, login}})

export const setAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthAPI().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
    }
}

export default authReducer