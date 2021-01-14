const store = {
    _state : {
        profilePage: {
            posts : [
                {id:1, message: 'Hi. How are you?', likeCount: '3'},
                {id:2, message: 'It`s my first post', likeCount: '5'},
                {id:3, message: 'Hi, it`s my second post', likeCount: '7'},
              ],
            newPostText: '',
        },
        messagesPage : {
            dialogs : [
                {id: 1, name: 'Ivanka'},
                {id: 2, name: 'Roman'},
                {id: 3, name: 'Ira'},
                {id: 4, name: 'Nika'},
                {id: 5, name: 'Vika'},
                {id: 6, name: 'Petro'},
            ],
            messages : [
                {id:1, message: 'Hello'},
                {id:1, message: 'How are you?'},
                {id:1, message: 'Yo'},
                {id:1, message: 'Yo'}
            ],
            newMessageText : '',
        }
    },
    _callSubscriber(){
        console.log('State was changed')
    },
    getState(){
        return this._state;
    },
    updateMessageText(newText){
        
    },
    subscribe(observe){
        this._callSubscriber = observe;
    },
    dispatch(action){
        if(action.type === 'ADDPOST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost); 
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATEPOSTTEXT') {
            this._state.profilePage.newPostText = action.text;
            console.log(this._state.profilePage.newPostText);
            this._callSubscriber(this._state);
        } else if(action.type === 'ADDMESSAGE'){
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATEMESSAGETEXT'){
            this._state.messagesPage.newMessageText = action.text;
            this._callSubscriber(this._state)
        }
    }
}

export default store;

window.store = store;