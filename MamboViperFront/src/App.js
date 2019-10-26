import React, { Component } from "react";
import "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

import MamboViperNavbar from "./Components/MamboViperNavbar/MamboViperNavbar.js";
import MamboViperThemeChooser from "./Components/MamboViperThemeChooser/MamboViperThemeChooser.js";
import MamboViperCommentTyper from "./Components/MamboViperCommentTyper/MamboViperCommentTyper.js";

var WebFont = require('webfontloader');
 
WebFont.load({
  google: {
    families: ['Quicksand', 'Roboto']
  }
});

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <MamboViperNavbar id="MamboViperNavbar"/>
                <Container>
                    <MamboViperThemeChooser/>
                    <MamboViperCommentTyper/>
                </Container>
            </>
        )
    }
}

export default App;