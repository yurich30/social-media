const ADDMESSAGE = 'ADDMESSAGE'
const UPDATEMESSAGETEXT = 'UPDATEMESSAGETEXT'

const messagesPageReducer = (state, action) => {
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