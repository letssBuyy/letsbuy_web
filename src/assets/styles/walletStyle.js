import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    padding: 160px 100px;
    
    h1 {
        font-family: ${fonts.semiBold};
        font-size: 20px;
        color: ${colors.blackGray};
        margin-bottom: 50px;
    }

    @media screen and (max-width: 900px) {
        padding: 50px 20px;
    }
`;

export const ContainerBalance = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }

    p {
        font-family: ${fonts.semiBold};
        font-size: 35px;
        color: ${colors.blackGray};
        margin-right: 14px;
    }

    img {
        width: 24px;
        height: 24px;
    }

    button {
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.pink};
        background-color: transparent;
        margin-left: 44px;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;

        button {
            margin: 30px 0 0 0;
            padding: 0;
        }
    }
`;

export const ContainerHistoric = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    >p {
        font-family: ${fonts.medium};
        font-size: 18px;
        color: ${colors.blackGray};
        margin-bottom: 45px;
    }

    >div {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100px;
    }
`;

export const CardDeposit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    padding: 18px 45px;
    margin: 15px 0;

    div:first-child {
        display: flex;
        flex-direction: column;
    }

    div:last-child {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.blackGray};
        margin-bottom: 8px;
    }

    span {
        font-family: ${fonts.regular};
        font-size: 15px;
        color: ${colors.pink};
        margin-bottom: 8px;
    }

    h3 {
        font-family: ${fonts.regular};
        font-size: 12px;
        color: ${colors.grayMedium};
        margin: 0;
    }

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 20px;
        color: ${colors.green};
        margin: 0;
    }

    @media screen and (max-width: 600px) {
        padding: 18px 10px;
    }

    @media screen and (max-width: 500px) {
        padding: 18px 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h1 {
            margin: 20px 0;
        }

        div:last-child {
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
`;

export const CardWithdraw = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    padding: 18px 45px;
    margin: 15px 0;

    div:first-child {
        display: flex;
        flex-direction: column;
    }

    div:last-child {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.blackGray};
        margin-bottom: 8px;
    }

    span {
        font-family: ${fonts.regular};
        font-size: 15px;
        color: ${colors.blackGray};
        margin-bottom: 8px;
    }

    h3 {
        font-family: ${fonts.regular};
        font-size: 12px;
        color: ${colors.grayMedium};
        margin: 0;
    }

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 20px;
        color: ${colors.red};
        margin: 0;
    }

    @media screen and (max-width: 600px) {
        padding: 18px 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        h1 {
            margin: 20px 0;
        }

        div:last-child {
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
`;