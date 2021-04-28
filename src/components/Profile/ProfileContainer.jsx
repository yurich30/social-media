import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setProfile } from '../../redux/profilePageReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount(){

        const routeUserId = this.props.match.params.userId

        if(!routeUserId){
            axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => this.props.setProfile(response.data))
        } axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + routeUserId)
        .then(response => this.props.setProfile(response.data))
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