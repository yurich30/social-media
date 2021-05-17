import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileAPI } from '../../api/api';
import { setProfile } from '../../redux/profilePageReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount(){

        const routeUserId = this.props.match.params.userId

        if(!routeUserId){
            profileAPI.setProfile().then(data => this.props.setProfile(data))
        } profileAPI.setProfile(routeUserId).then(data => this.props.setProfile(data))
    }

    render(){
        return(
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let ProfileContainerWithRoute = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setProfile
}) (ProfileContainerWithRoute);