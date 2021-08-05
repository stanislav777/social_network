import React from 'react';

type ProfileStatusType = {
    status: string
    updateStatusTC:(status: string)=>void


}


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

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
         this.setState({status : this.props.status})
        }
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