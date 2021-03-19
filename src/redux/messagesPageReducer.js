const ADDMESSAGE = 'ADDMESSAGE'
const UPDATEMESSAGETEXT = 'UPDATEMESSAGETEXT'

let initialState = {
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

const messagesPageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATEMESSAGETEXT: 
            state.newMessageText = action.text;
            return state;
        case ADDMESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default: return state
    }
}

export const addMessageActionCreator = () => ({ type:  ADDMESSAGE});
export const updateMessageTextActionCreator = (message) => ({ type: UPDATEMESSAGETEXT, text: message })

export default messagesPageReducer