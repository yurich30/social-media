import { connect } from 'react-redux';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messagesPageReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
    state: state.dialogsPage,
})

const mapDispatchToProps = (dispatch) => {
    return {
        messageChange:(text) => dispatch(updateMessageTextActionCreator(text)),
        addMessage:() => dispatch(addMessageActionCreator())
    }
}

const withAuthDialogsContainer = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthDialogsContainer)
    
export default DialogsContainer;
