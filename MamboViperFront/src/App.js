import React, { Component } from "react";
import "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

import MamboViperNavbar from "./Components/MamboViperNavbar/MamboViperNavbar.js";
import MamboViperThemeChooser from "./Components/MamboViperThemeChooser/MamboViperThemeChooser.js";
import MamboViperCommentTyper from "./Components/MamboViperCommentTyper/MamboViperCommentTyper.js";
import MamboViperPhoneNumber from "./Components/MamboViperPhoneNumber/MamboViperPhoneNumber.js";

var WebFont = require('webfontloader');
 
WebFont.load({
  google: {
    families: ['Quicksand', 'Roboto']
  }
});

import $ from "jquery";

class App extends Component {
    constructor(props){
        super(props);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.changeSubreddit = this.changeSubreddit.bind(this);
        this.state = {
            comments: [
                "Comments will appear here!!"
            ],
            subreddit: "-a"
        }
    }
    handleGenerate( event ) {
        console.log("Generating Comments...");
        // Update comment list in state.
        try {
            const subreddit = this.state.subreddit;
            let URL = `http://35.246.65.193:5000/?subreddit=${subreddit}`;
            let comment = ""

            // FETCH
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                let comment = data;
                this.setState({comments: this.state.comments.concat([data.comments])})
                
            })
        } finally {
            console.log(this.state.comments);
        }

    }
    changeSubreddit ( subreddit ) {
        this.setState({subreddit: subreddit});
    }
    componentDidMount() {
        $("#all-btn").click();
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

        return (
            <>
                <MamboViperNavbar id="MamboViperNavbar"/>
                <MamboViperPhoneNumber/>
                <Container>
                    <MamboViperThemeChooser choices={[[Sport, "-s"], [GeneralChat, "-r"], [Gaming, "-g"], [Funspiracy, "-f"]]} changeSubreddit={this.changeSubreddit} handleGenerate={this.handleGenerate}/>
                    <MamboViperCommentTyper comments={this.state.comments}/>
                </Container>
            </>
        )
    }
}

export default App;