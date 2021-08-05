import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)


    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>

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
export default  connect(mapStateToProps, {getProfileTC,getStatusTC, updateStatusTC})(AuthRedirectComponent);



// export default compose<ComponentType>(
//     withRouter,
//     withAuthRedirect,
//     connect(mapStateToProps, {getProfileThunkCreator})
// )(ProfileContainer)











