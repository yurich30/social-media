import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profilePageReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {
    setProfile
}) (ProfileContainer);