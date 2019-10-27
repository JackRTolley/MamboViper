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
        let classList = event.target.classList;

        document.getElementById("ThemeChooserBtnGroup").childNodes.forEach( button => {
            button.classList.remove("btn-danger");
            button.classList.add("btn-outline-danger");
        } );

        if ( classList.contains("btn-danger") ) {
            classList.remove("btn-danger");
            classList.add("btn-outline-danger");
        } else {
            classList.remove("btn-outline-danger");
            classList.add("btn-danger");
        }
    }
    render(){
        return (
            <div className={cx( Styles.WrapperStyles )}>
                <h5>Pick a subreddit!</h5>
                <hr></hr>
                <ButtonGroup id="ThemeChooserBtnGroup" className={ cx( Styles.ButtonGroupStyles ) } vertical>
                    {
                        this.props.choices.map( choice => <Button className={ cx( Styles.ButtonStyles ) } variant="outline-danger" onClick={(event) => {this.handleClick(event);this.props.changeSubreddit(choice[1])}}>{choice[0]}</Button> )
                    }
                    <Button id="all-btn" className={ cx( Styles.ButtonGroupStyles ) } variant="outline-danger" onClick={this.handleClick}>
                        <>
                            <i className="fab fa-battle-net"></i>
                            &nbsp;&nbsp;Everything
                        </>
                    </Button>
                </ButtonGroup>

                <Button className={ cx( Styles.GenerateBtnStyles ) } variant="light" onClick={this.props.handleGenerate}>
                    Generate!
                </Button>
            </div>
        )
    }
}

export default MamboViperThemeChooser;