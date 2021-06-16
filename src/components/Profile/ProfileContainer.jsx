import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId)
        // usersAPI.getProfile(userId).then(response => {
        // this.props.setUserProfileAC(response.data);
        // });
    }



    render() {

        if(!this.props.isAuth){ return <Redirect to={'/login'}/>}

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.isAuth.isAuth
});

const ProfileContainerRouter = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getProfileThunkCreator})(ProfileContainerRouter);
