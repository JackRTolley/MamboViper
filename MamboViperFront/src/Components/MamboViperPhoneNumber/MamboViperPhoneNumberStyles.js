import { css } from "emotion";

const Styles = {
    PhoneNumberParentStyles: css`
        text-align: center;
        width: 80%;
        
        border-radius: 5px;
        padding: 25px;
        margin-bottom: 40px;
    `,
    PhoneNumberWrapperStyles: css`
        font-size: 5vh;
        font-weight: bold;
        margin-bottom: 35px;
        transition: all 1.25s;
        &:hover {
            font-size: 6.5vh;
            transition: all 1.25s;
        }
    `,
    SpamMobileStyles: css `
        margin-top: 10px;
        margin-bottom: 10px;
        width: 60%;
    `
}

export default Styles;