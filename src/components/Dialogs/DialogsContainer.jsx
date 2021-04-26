import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import Dialogs from './Dialogs';

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
