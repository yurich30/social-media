const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const photo = 'data:image/jpeg;base64,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'

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