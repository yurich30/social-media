import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return  <Component {...this.props}/>
        }
    }
    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}

export default withAuthRedirect