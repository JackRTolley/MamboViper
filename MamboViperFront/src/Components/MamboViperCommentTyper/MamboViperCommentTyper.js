import React, { Component } from "react";
import ReactDOM from "react-dom";

import MamboViperComment from "./MamboViperComment/MamboViperComment.js";
import Styles from "./MamboViperCommentTyperStyles.js";
import { cx } from "emotion";

import  { Col, Row } from "react-bootstrap";

class MamboViperCommentTyper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments.map( comment => <MamboViperComment content={comment}/> )
        }
        console.log(this.state.comments);
    }
    render() {
        return (
            <div className={ cx( Styles.MamboViperCommentTyperStyles, "text-center", "justify-content-center" ) }>
                <Col md="12">
                { this.state.comments }
                </Col>
            </div>
        )
    }
}

export default MamboViperCommentTyper;