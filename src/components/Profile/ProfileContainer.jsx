import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { setProfile } from '../../redux/profilePageReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount(){

        const routeUserId = this.props.match.params.userId

        if(!routeUserId){
            this.props.setProfile()
        } this.props.setProfile(routeUserId)
    }

    render(){
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return(
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let ProfileContainerWithRoute = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setProfile
}) (ProfileContainerWithRoute);