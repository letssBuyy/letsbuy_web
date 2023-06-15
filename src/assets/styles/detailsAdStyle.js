import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    display: flex;
    margin: 100px 100px 90px 100px;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        margin: 90px 50px 90px 50px;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        margin: 90px 20px 90px 20px;
    }
`;

export const ContainerImages = styled.div`
    width: 40%;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 50px;
    }

    /* 
    >img {
        width: 100%;
        height: auto;
        max-width: 450px;
        max-height: 450px;
        border-radius: 10px;
    }

    div {
        display: flex;
        margin-top: 32px;
        justify-content: flex-start;
    }

    div img {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        margin-right: 9px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
        margin-bottom: 30px;
        >img {
            max-width: 350px;
            max-height: 350px;
            width: 100%;
            height: 100%;
        }

        div img {
            width: 60px;
            height: 60px;
        }
    } */
`;

export const ContainerContent = styled.div`
    width: 50%;
    max-width: 550px;

    @media screen and (max-width: 900px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const DivImagePagSeguro = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;
    }
`;

export const InfoAd = styled.div`
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    padding: 25px;

    >div:first-child {
        margin-bottom: 27px;
    }

    >div:first-child div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    >div:first-child div button {
        width: 30px;
        height: 30px;
        background-color: transparent;
    }

    >div:nth-child(2) {
       margin-bottom: 50px;
    }

    >div:nth-child(5) {
        display: flex;
        margin: 30px 0;
    }

    >div:nth-child(5) button:first-child {
        border-radius: 5px;
        background-color: ${colors.pink};
        padding: 12px 80px;
        
        font-size: 16px;
        font-family: ${fonts.medium};
        color: ${colors.white};
    }
 
    >div:nth-child(5) button:last-child {
        font-size: 14px;
        font-family: ${fonts.medium};
        color: ${colors.pink};
        background-color: transparent;
        margin-left: 70px;
    }

    @media screen and (max-width: 1100px) {
        >div:nth-child(5) {
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        >div:nth-child(5) button:last-child {
            margin: 20px 0;
        }
    }

    >div:last-child div img {
        margin-right: 7.5px;
    }

    h1 {
        font-size: 20px;
        font-family: ${fonts.semiBold};
        color: ${colors.blackGray};
    }

    span {
        font-size: 14px;
        font-family: ${fonts.medium};
        color: ${colors.grayMedium};
    }

    p {
        font-size: 14px;
        font-family: ${fonts.medium};
        color: ${colors.blackGray};
    }

    h2 {
        font-size: 30px;
        font-family: ${fonts.semiBold};
        color: ${colors.pink};
    }

    h3 {
        font-size: 16px;
        font-family: ${fonts.semiBold};
        color: ${colors.blackGray};
        margin-bottom: 10px;
    }
`;

export const BoxNewFinders = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    div {
        display: flex;
    }

    p {
        margin-left: 5px;
    }
`;

export const TipsOfSecurity = styled.div`
    display: flex;
    align-items: center;
    margin: 22px 0;

    img {
        width: 24px;
        margin-right: 22px;
    }

    p {
        font-size: 12px;
        font-family: ${fonts.medium};
        color: ${colors.grayMedium};
    }

    span {
        color: ${colors.pink};
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;

        img {
            margin: 20px 0;
        }

        p {
            text-align: center;
        }
    }
`;

export const SaleInformation = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.gray};
    border-radius: 10px;

    >div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    >div:first-child >div {
        display: flex;
        padding: 40px 20px;
    }

    >div:first-child >div >div {
        display: flex;
        flex-direction: column;
        margin: 0 30px 0 10px;
    }

    >div:first-child >div div p {
        font-size: 16px;
        font-family: ${fonts.semiBold};
        color: ${colors.pink};
        margin: 2px 0;
    }

    >div:first-child >div div span {
        font-size: 16px;
        font-family: ${fonts.medium};
        color: ${colors.blackGray};
    }

    >div:first-child >div button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: ${fonts.medium};
        color: ${colors.pink};
        padding: 12px;
        background-color: transparent;
        border: 1px solid ${colors.pink};
        border-radius: 10px;
    }

    @media screen and (max-width: 1100px) {
        >div:first-child {
            flex-direction: column;
        }

        >div:first-child >div {
            display: flex;
            padding: 20px 20px;
        }
    }

    >div:first-child >div button img {
        width: 20px !important;
        height: 20px !important;
        margin-left: 10px;
    }

    >div:first-child div img:first-child {
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }

    >div:nth-child(2) {
        display: flex;
        justify-content: center;
        border-top: 1px solid ${colors.gray};
        border-bottom: 1px solid ${colors.gray};
    }

    >div:nth-child(2) div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 29px;
    }

    >div:nth-child(2) p {
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.grayMedium};
    }

    >div:nth-child(2) span {
        font-size: 18px;
        font-family: ${fonts.semiBold};
        color: ${colors.blackGray};
        margin-top: 10px;
    }

    >div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
    }

    >div:last-child span {
        font-size: 12px;
        font-family: ${fonts.medium};
        color: ${colors.grayMedium};
    }
`;