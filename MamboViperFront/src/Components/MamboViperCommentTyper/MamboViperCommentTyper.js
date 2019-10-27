import React, { Component } from "react";
import ReactDOM from "react-dom";

import MamboViperComment from "./MamboViperComment/MamboViperComment.js";
import Styles from "./MamboViperCommentTyperStyles.js";
import { cx } from "emotion";


import  { Col, Row } from "react-bootstrap";

class MamboViperCommentTyper extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.comments.reverse());
    }
    render() {
        return (
            <div className={ cx( Styles.CommentTyperStyles) }>
                { this.props.comments.map( (comment, index) => {
                    console.log(comment);
                    console.log(index === this.props.comments.length-1);
                    console.log(index);
                    return <MamboViperComment content={comment} last={ index === this.props.comments.length-1 } id={index}/>
                }).reverse() }
            </div>
        )
    }
}

export default MamboViperCommentTyper;