const UPDATEPOSTTEXT = 'UPDATEPOSTTEXT'
const ADDPOST = 'ADDPOST'

const profilePageReducer = (state, action) => {
    switch(action.type){
        case UPDATEPOSTTEXT: 
            state.newPostText = action.text;
            return state;
        case ADDPOST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost); 
            state.newPostText = '';
            return state;
        default: return state
    }
}

export const updatePostTextActionCreator = (updateText) => ({ type: UPDATEPOSTTEXT, text: updateText })
export const addPostActionCreator = () => ({ type: ADDPOST })

export default profilePageReducer