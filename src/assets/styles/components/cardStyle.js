import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const CardContainer = styled.div`
    width: 200px;
    height: 297px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const CardProfile = styled.div`
    width: 100%;
    height: 216px;

    img {
        width: 100%;
        height: 216px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const ContainerDivs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 75px;

    position: relative;
`;

export const InfoAdvertise = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    text-align: start;
    transition: opacity .1s ease-out .05s;

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 18px;
        color: ${colors.pink};
        margin-bottom: 3px;
    }

    p {
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.blackGray};
        margin-bottom: 6px;
    }

    span {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.blackGray};
    }
`;

export const InfoSalle = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    margin-top: 14px;
    transition: opacity .15s ease-out, .15s ease-out;
    opacity: 0;

    img {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin-right: 9px;
        object-fit: cover;
    }

    h1 {
        max-width: 110px;
        height: 20px;
        font-family: ${fonts.semiBold};
        font-size: 16px;
        color: ${colors.pink};
        white-space: nowrap; /* Evita que o texto quebre em várias linhas */
        overflow: hidden; /* Oculta o texto que excede a largura */
        text-overflow: ellipsis; /* Exibe as bolinhas no final do texto truncado */
    }

    p {
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.blackGray};
    }

    >div:last-child img {
        width: 24px;
        height: 24px;
    }
`;

export const HeartIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 25px;
    height: 25px;
`;