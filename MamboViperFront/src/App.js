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
                "<p><em>\" South End, 1985. Masking tape writing on brownstone windows: GLORIA XXX. Excited by predicted 100 mph winds, we grab our camera and walk in blustery streets. Rain spitting... \"</em></p>"
            ]
        }
    }
    handleGenerate( event ) {
        console.log("Generating Comments...");
        // Update comment list in state.
        try {
            const subreddit = "-a";
            let URL = `http://0.0.0.0:5000/?subreddit=${subreddit}`;
            let comment = ""


            try {
                // FETCH
                fetch(URL)
                .then(response => response.json())
                .then(data => comment += data.comments)
            } finally {
                console.log(`Comment: ${comment}`);
                this.setState({
                    comments: this.state.comments.concat(comment)
                })
            }
        } finally {
            console.log(this.state.comments);
        }

    }
    render(){
        const Sport = <>
            <i class="fas fa-running"></i>
            &nbsp;&nbsp;Sport
        </>

        const Gaming = <>
            <i class="fas fa-dragon"></i>
            &nbsp;&nbsp;Gaming
        </>

        const Funspiracy = <>
            <i class="fas fa-search"></i>
            &nbsp;&nbsp;Funspiracy
        </>

        const GeneralChat = <>
            <i class="fab fa-reddit-alien"></i>
            &nbsp;&nbsp;Reddit
        </>

        const All = <>
            <i className="fab fa-battle-net"></i>
            &nbsp;&nbsp;Everything
        </>

        return (
            <>
                <MamboViperNavbar id="MamboViperNavbar"/>
                <Container>
                    <MamboViperThemeChooser choices={[Sport, GeneralChat, Gaming, Funspiracy, All]} handleGenerate={this.handleGenerate}/>
                    <MamboViperCommentTyper comments={this.state.comments}/>
                </Container>
            </>
        )
    }
}

export default App;