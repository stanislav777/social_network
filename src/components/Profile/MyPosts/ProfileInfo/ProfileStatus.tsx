import React from 'react';
import { updateStatusTC } from '../../../../redux/profile-reducer';
import * as events from 'events';

type ProfileStatusType = {
    status: string
    updateStatusTC:(status: string)=>void
    // activateEditMode: () => void

}

// type StateType = {
//     editMode: boolean
// }

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
      this.setState({
          editMode: true
      })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }
    onStatusChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       this.setState({
           status:  e.currentTarget.value})
    }




    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;