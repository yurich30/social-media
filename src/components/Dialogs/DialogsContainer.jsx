import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//             {(store) => {
//                 function addMessage() {
//                     store.dispatch(addMessageActionCreator());
//                 }
            
//                 let messageChange = (text) => {
//                     store.dispatch(updateMessageTextActionCreator(text));
//                 }
            
//                 return (<Dialogs
//                     state={store.getState().dialogsPage}
//                     messageChange={messageChange}
//                     addMessage={addMessage}
//                 />)
//             }}
//         </StoreContext.Consumer>
// }

const mapStateToProps = (state) => ({
    state: state.dialogsPage
})

const mapDispatchToProps = (dispatch) => {
    return {
        messageChange:(text) => dispatch(updateMessageTextActionCreator(text)),
        addMessage:() => dispatch(addMessageActionCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
    
export default DialogsContainer;
