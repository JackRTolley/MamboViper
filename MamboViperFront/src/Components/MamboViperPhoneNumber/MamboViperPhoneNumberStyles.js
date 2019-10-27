import { css } from "emotion";

const Styles = {
    PhoneNumberParentStyles: css`
        text-align: center;
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
    `
}

export default Styles;