import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Button } from "react-bootstrap";

import { cx } from "emotion";
import Styles from "./MamboViperThemeChooserStyles.js";

class MamboViperThemeChooser extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick( event ) {
        console.log("test")
    }
    render(){
        return (
            <>
                <h5>Pick a subreddit!</h5>
                <hr></hr>
                <ButtonGroup className={ cx( Styles.ButtonGroupStyles ) } vertical>
                    <Button className={ cx( Styles.ButtonStyles ) } variant="outline-danger" onClick={this.handleClick}>Test Choice</Button>
                    <Button className={ cx( Styles.ButtonStyles ) } variant="outline-danger" onClick={this.handleClick}>Test Choice</Button>
                    <Button className={ cx( Styles.ButtonStyles ) } variant="outline-danger" onClick={this.handleClick}>Test Choice</Button>
                    <Button className={ cx( Styles.ButtonStyles ) } variant="outline-danger" onClick={this.handleClick}>Test Choice</Button>
                </ButtonGroup>

                <Button className={ cx( "mx-auto", Styles.GenerateBtnStyles ) } variant="light">
                    Generate!
                </Button>
            </>
        )
    }
}

export default MamboViperThemeChooser;