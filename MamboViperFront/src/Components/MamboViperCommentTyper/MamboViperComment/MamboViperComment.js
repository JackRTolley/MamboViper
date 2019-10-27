import React, { Component } from "react";
import ReactDOM from "react-dom";

// import TypeWriter from "typewriter-effect/dist/core";
import TypeIt from "typeit";
import Alert from "react-bootstrap/Alert";

import { cx } from "emotion";
import Styles from "./MamboViperCommentStyles.js";

import { Row } from "react-bootstrap";

import $ from "jquery";


class MamboViperComment extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className={ cx( Styles.CommentJumbotronStyles, "shadow-sm" ) } variant="light">
                <div className={ cx( Styles.TextHoverClass ) }>{this.props.content}</div>
            </div>
        )
    }
}

export default MamboViperComment;