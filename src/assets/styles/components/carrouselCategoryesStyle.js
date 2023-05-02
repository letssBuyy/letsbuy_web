import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const Item = styled.div`
    width: auto;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 52px 0 100px 0;
    cursor: pointer;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        background-color: ${colors.whiteGrayTwo};
        margin:  0  0 22px 0;
        transition: background-color 0.5s ease;
    }

    div:hover {
        background-color: ${colors.pink};
    }

    div img {
        width: 90px;
        height: auto;
    }

    p {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.blackGray};
        text-align: center;
    }
`;