import React from 'react'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import StoreContext from '../../redux/StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
            {(store) => {
                function addMessage() {
                    store.dispatch(addMessageActionCreator());
                }
            
                let messageChange = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }
            
                return (<Dialogs
                    state={store.getState().dialogsPage}
                    messageChange={messageChange}
                    addMessage={addMessage}
                />)
            }}
        </StoreContext.Consumer>
}
    
export default DialogsContainer;
