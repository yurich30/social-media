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
        {id:2, message: 'How are you?'},
        {id:3, message: 'Yo'},
        {id:4, message: 'Yo'}
    ],
    newMessageText : '',
}

const messagesPageReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATEMESSAGETEXT: 
            return {
                ...state,
                newMessageText: action.text
            }
        case ADDMESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: state.newMessageText}],
                newMessageText: ''
            }
        default: return state
    }
}

export const addMessageActionCreator = () => ({ type:  ADDMESSAGE});
export const updateMessageTextActionCreator = (message) => ({ type: UPDATEMESSAGETEXT, text: message })

export default messagesPageReducer