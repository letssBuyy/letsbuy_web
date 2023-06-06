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

    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: auto;
        min-width: 20px;
        min-height: 25px;
        max-width: 50%;
        background-color: ${colors.gray};
        border-radius: 10px;
    }

    >div >p {
        font-size: 18px;
        font-family: ${fonts.semiBold};
        color: ${colors.pink};
        margin: 20px 20px 0 20px;
    }

    >div >span {
        font-size: 16px;
        font-family: ${fonts.medium};
        color: ${colors.black};
        margin: 7px 20px 20px 20px;
    }
`;

export const CardAdvertise = styled.div`
    display: flex;
    padding: 20px 0;

    img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 22px;
    }

    p {
        font-size: 16px;
        font-family: ${fonts.medium};
        color: ${colors.black};
    }

    span {
        font-size: 25px;
        font-family: ${fonts.semiBold};
        color: ${colors.pink};
    }
`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    height: 70px;

    button:first-child {
        background-color: ${colors.pink};
        width: 50%;

        font-size: 15px;
        font-family: ${fonts.semiBold};
        color: ${colors.white};
        border-bottom-left-radius: 10px;
    }

    button:last-child {
        background-color: transparent;
        width: 50%;
        border-top: 1px solid ${colors.pink};

        font-size: 15px;
        font-family: ${fonts.semiBold};
        color: ${colors.pink};
    }
`;