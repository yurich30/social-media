import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount(){
        this.props.setAuthUserData()
    }

    render(){
        return(
            <Header {...this.props}/>
        );
    } 
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);