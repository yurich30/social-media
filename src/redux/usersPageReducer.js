const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialState = {
    users: [
        // {   id:1, 
        //     photoUrl: photo, 
        //     followed: true, 
        //     name: "Ivan", 
        //     surname: "Ivanov", 
        //     status: "I`m looking for the new job", 
        //     location: {city: "Kyiv", country: "Ukraine"}
        // },
        // {   id:2, 
        //     photoUrl: photo, 
        //     followed: false, 
        //     name: "Petro", 
        //     surname: "Petrov", 
        //     status: "I`m looking for the new job as economist", 
        //     location: {city: "Kharkiv", country: "Ukraine"}
        // },
        // {   id:3, 
        //     photoUrl: photo, 
        //     followed: true, 
        //     name: "Dmytro", 
        //     surname: "Kovtoniuk", 
        //     status: "I`m looking for the new job too", 
        //     location: {city: "Rivne", 
        //     country: "Ukraine"}
        // }
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersPageReducer