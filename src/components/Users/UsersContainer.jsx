import React from "react";
import {mapDispatchToProps, mapStateToProps} from "../Dialogs/DialogsContainer";

let mapStateToProps = (state) => {
    return {
     user: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatc) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);