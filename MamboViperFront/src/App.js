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
        this.handleGenerate = this.handleGenerate.bind(this);
        this.state = {
            comments: [
                "<p><em>\" This is a comment. \"</em></p>"
            ]
        }
    }
    handleGenerate( event ) {
        console.log("Generating Comments...");
        // Update comment list in state.
        this.setState({
            comments: this.state.comments.concat(["<p><em>\" This is a new comment. \"</em></p>"])
        })

    }
    render(){
        const Android = <>
            <i className="fab fa-android"></i>
            &nbsp;&nbsp;Android
        </>

        const Programming = <>
            <i className="fab fa-github-alt"></i>
            &nbsp;&nbsp;Programming
        </>

        const CatsAndDogs = <>
            <i className="fas fa-cat"></i>
            &nbsp;&nbsp;Cats and Dogs
        </>

        const Apple = <>
            <i className="fab fa-apple"></i>
            &nbsp;&nbsp;Apple
        </>

        const All = <>
            <i class="fab fa-battle-net"></i>
            &nbsp;&nbsp;Everything
        </>


        return (
            <>
                <MamboViperNavbar id="MamboViperNavbar"/>
                <Container>
                    <MamboViperThemeChooser choices={[Android, Programming, CatsAndDogs, Apple, All]} handleGenerate={this.handleGenerate}/>
                    <MamboViperCommentTyper comments={this.state.comments}/>
                </Container>
            </>
        )
    }
}

export default App;