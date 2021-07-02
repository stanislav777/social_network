import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const ProfileContainerRouter = withRouter(ProfileContainer)
let AuthRedirectComponent = withAuthRedirect(ProfileContainerRouter)
export default  connect(mapStateToProps, {getProfileThunkCreator})(AuthRedirectComponent);



// export default compose<ComponentType>(
//     withRouter,
//     withAuthRedirect,
//     connect(mapStateToProps, {getProfileThunkCreator})
// )(ProfileContainer)
