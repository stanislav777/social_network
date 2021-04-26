import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component{
    componentDidMount() {

        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/+`)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            })
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}   />
            </div>
        )
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
});

const ProfileContainerRouter = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfileAC} ) (ProfileContainerRouter);
