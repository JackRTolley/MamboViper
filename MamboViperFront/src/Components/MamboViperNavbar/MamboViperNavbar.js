import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

import { cx } from "emotion";
import Styles from "./MamboViperNavbarStyles";

class MamboViperNavbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id={this.props.id}>
                <Navbar className={cx( Styles.NavbarStyles )} expand="lg">
                    <Navbar.Brand href="#">
                        <i className={cx("fab", "fa-reddit", Styles.RedditIconStyles, "fa-lg")}></i>
                        Reddit Against Humanity
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}


export default MamboViperNavbar;