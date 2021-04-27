const UPDATEPOSTTEXT = 'UPDATEPOSTTEXT'
const ADDPOST = 'ADDPOST'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    posts : [
        {id:1, message: 'Hi. How are you?', likeCount: '3'},
        {id:2, message: 'It`s my first post', likeCount: '5'},
        {id:3, message: 'Hi, it`s my second post', likeCount: '7'},
      ],
    newPostText: '',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATEPOSTTEXT: 
            return {
                ...state,
                newPostText: action.text
            }
        case ADDPOST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: state.newPostText, likeCount: 0}],
                newPostText: ''
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            }
        default: return state
    }
}

export const updatePostTextActionCreator = (updateText) => ({ type: UPDATEPOSTTEXT, text: updateText })
export const addPostActionCreator = () => ({ type: ADDPOST })
export const setProfile = (userProfile) => ({type: SET_PROFILE, userProfile})

export default profilePageReducer