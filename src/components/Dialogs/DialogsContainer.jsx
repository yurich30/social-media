import React from 'react'
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import c from './Dialogs.module.css'
import Message from './Messages/Message';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    function addMessage() {
        props.store.dispatch(addMessageActionCreator());
    }

    let messageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (<Dialogs
        state={state}
        messageChange={messageChange}
        addMessage={addMessage}
    />)
}
    
export default DialogsContainer;
