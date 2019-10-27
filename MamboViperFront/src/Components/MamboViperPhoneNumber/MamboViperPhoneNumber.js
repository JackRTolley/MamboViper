import React, { Component } from "react";
import ReactDOM from "react-dom";

import { InputGroup, Button, FormControl } from "react-bootstrap";
import $ from "jquery";

import { cx } from "emotion";
import Styles from "./MamboViperPhoneNumberStyles.js";

class MamboViperPhoneNumber extends Component {
    constructor(props) {
        super(props)
        this.spamMobile = this.spamMobile.bind(this);
    }
    spamMobile(event){
        try{
            const URL = `http://35.246.65.193:5000/smsSpamService?phone_number=${$("#mobileField").val()}&subreddit=-a`;
            fetch(URL)
            .then(response => console.log(response.json()))
        } catch ( error ) {
            console.log(`An Error occured: ${error}`)
        }

        $("#mobileField").val("");
    }
    render(){
        return(
            <div className={ cx(Styles.PhoneNumberParentStyles, "container") }>  
                <h1 className={ cx(Styles.PhoneNumberWrapperStyles, "text-muted")}>http://35.189.127.53:8080/</h1>
                <InputGroup className={cx(Styles.SpamMobileStyles)} >
                <FormControl
                    placeholder="Phone Number"
                    id="mobileField"
                />
                    <InputGroup.Append>
                        <Button onClick={this.spamMobile} variant="danger"><em>Generate Comments</em></Button>
                    </InputGroup.Append>
                </InputGroup>
                <hr/>
            </div>
        )
    }
}
    

export default MamboViperPhoneNumber;