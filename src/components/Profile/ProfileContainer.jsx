import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withAuthRedirect from '../../hocs/withAuthRedirect';
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
        return(
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const withAuthRedirectProfileContainer = withAuthRedirect(ProfileContainer)

let ProfileContainerWithRoute = withRouter(withAuthRedirectProfileContainer)

export default connect(mapStateToProps, {
    setProfile
}) (ProfileContainerWithRoute);