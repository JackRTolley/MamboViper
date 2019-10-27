import { css, cx } from "emotion";


const Styles = {
     CommentJumbotronStyles: css`
        background-color: white;
        border: 3px solid whitesmoke;
        border-radius: 5px;
        width: 40vw;
        min-width: 200px;
        padding: 25px;

        font-family: "Quicksand";

        margin: auto;
        margin-top: 25px;
        margin-bottom: 25px;
        margin-top: 25px;
    
    `,
    TextHoverClass: css `
        color: grey;
        &:hover {
            color: black;
            font-size: 18px;
            transition: all 0.75s;
            cursor: default;
        }
    `
}

export default Styles;