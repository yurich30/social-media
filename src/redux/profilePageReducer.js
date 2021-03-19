const UPDATEPOSTTEXT = 'UPDATEPOSTTEXT'
const ADDPOST = 'ADDPOST'

let initialState = {
    posts : [
        {id:1, message: 'Hi. How are you?', likeCount: '3'},
        {id:2, message: 'It`s my first post', likeCount: '5'},
        {id:3, message: 'Hi, it`s my second post', likeCount: '7'},
      ],
    newPostText: '',
}

const profilePageReducer = (state = initialState, action) => {
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