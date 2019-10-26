import React, { Component } from "react";
import ReactDOM from "react-dom";

import Typed from "typed.js";
import Alert from "react-bootstrap/Alert";

import { cx } from "emotion";
import Styles from "./MamboViperCommentStyles.js";

import { Row } from "react-bootstrap";


class MamboViperComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                strings: [this.props.content],
                typeSpeed: 40,
            }
        }
    }
    componentDidMount() {
        var typed = new Typed("#typed", this.state.options);
    }
    render(){
        return (
            <Alert className={ cx( Styles.CommentJumbotronStyles, "shadow-sm" ) } variant="light">
                <div id="typed"></div>
            </Alert>
        )
    }
}

export default MamboViperComment;