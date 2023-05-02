import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";
import backgroundImage from '../../images/banner-background.png'

export const Background = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        height: auto;
        padding: 20px 0 0 0;
        background-position-x: center;
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        height: auto;
        padding: 0px 0 0 0;
        background-position-x: center;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 200px;
    border-radius: 10px;

    >div:first-child {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-left: 93px;
    }

    img {
        z-index: 2;
    }

    >div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 75px;
    }

    @media screen and (max-width: 500px) {
        justify-content: flex-start;
        display: flex;
        flex-direction: column-reverse;
        height: auto;

        >div:first-child {
            margin: 0 0 0 0;
        }

        img {
            max-width: 120px;
            width: 50%;
        }

        >div:last-child {
            margin: 0 0 20px 0;
        }
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
        justify-content: flex-start;
        display: flex;
        flex-direction: center;
        height: auto;

        >div:first-child {
            display: none;
        }

        >div:last-child {
            margin: 0 0 0px 0;
        }
    }
`;

export const Title = styled.div`
    max-width: 700px;
    font-family: ${fonts.semiBold};
    font-size: 30px;
    color: ${colors.white};
    text-align: center;

    span {
        color: ${colors.pnik};
    }

    @media screen and (max-width: 900px) {
        font-size: 20px;
        max-width: 90%;
    }
`;

export const Description = styled.div`
    max-width: 700px;
    font-family: ${fonts.regular};
    font-size: 20px;
    color: ${colors.white};
    text-align: center;
    margin-top: 13px;

    @media screen and (max-width: 900px) {
        font-size: 16px;
        max-width: 90%;
    }
`;