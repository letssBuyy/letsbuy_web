import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;

    span {
        font-size: 12px;
        font-family: ${fonts.medium};
        color: ${colors.blackMediumTwo};
        margin-bottom: 5px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: auto;
        min-width: 20px;
        min-height: 25px;
        max-width: 50%;
        padding: 10px 20px;
        background-color: ${colors.grayTwo};
        border-radius: 10px;
    }

    p {
        font-size: 14px;
        font-family: ${fonts.medium};
        color: ${colors.blackMediumTwo};
    }
`;