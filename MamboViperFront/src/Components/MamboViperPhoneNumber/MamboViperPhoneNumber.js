import React, { Component } from "react";
import ReactDOM from "react-dom";

import { cx } from "emotion";
import Styles from "./MamboViperPhoneNumberStyles.js";

class MamboViperPhoneNumber extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className={ cx(Styles.PhoneNumberParentStyles) }>  
                <h1 className={ cx(Styles.PhoneNumberWrapperStyles, "text-muted")}>08000119489</h1>
            </div>
        )
    }
}
    

export default MamboViperPhoneNumber;