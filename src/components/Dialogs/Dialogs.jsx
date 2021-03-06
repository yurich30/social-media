import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import c from './Dialogs.module.css'
import Message from './Messages/Message';

const Dialogs = (props) => {
    
    const dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map( m => <Message message={m.message}/>)
    const messageText = React.createRef();

    function onAddMessage() {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = messageText.current.value;
        props.messageChange(text);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                { dialogsElements }
            </div>
            <div className="messages">
                { messagesElements }
                <textarea ref={ messageText } onChange={ onMessageChange } value={props.state.newMessageText}/>
                <div>
                    <button onClick={ onAddMessage }>send message</button>
                </div>
            </div>
        </div>
    )
}
    
export default Dialogs;
