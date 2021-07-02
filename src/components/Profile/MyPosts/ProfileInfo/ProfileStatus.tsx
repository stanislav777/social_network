import React from 'react';

type ProfileStatusType = {
    status: string
    // activateEditMode: () => void

}

type StateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
      this.setState({
          editMode: true
      })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;