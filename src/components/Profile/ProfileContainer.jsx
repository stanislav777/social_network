import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from "../../redux/profile-reducer";
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
        this.props.getStatusThunkCreator(userId)


    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunkCreator = {this.props.updateStatusThunkCreator}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

const ProfileContainerRouter = withRouter(ProfileContainer)
let AuthRedirectComponent = withAuthRedirect(ProfileContainerRouter)
export default  connect(mapStateToProps, {getProfileThunkCreator,getStatusThunkCreator, updateStatusThunkCreator})(AuthRedirectComponent);



// export default compose<ComponentType>(
//     withRouter,
//     withAuthRedirect,
//     connect(mapStateToProps, {getProfileThunkCreator})
// )(ProfileContainer)
