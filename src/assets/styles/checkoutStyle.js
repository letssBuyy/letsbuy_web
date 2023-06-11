import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 100px 0px 100px;

    @media screen and (min-width: 901px) and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 900px) {
        padding: 20px 20px 0px 20px;
        display: flex;
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 25px;
        color: ${colors.black};
        margin-bottom: 40px;
    }

    p {
        font-family: ${fonts.medium};
        font-size: 18px;
        color: ${colors.blackGray};
        margin-bottom: 40px;
    }

    >div {
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.blackGray};
        margin-bottom: 40px;
    }

        @media screen and (max-width: 900px) {
            h1 {
                text-align: center;
                font-size: 20px;
                margin-top: 30px;
            }
    }
`;

export const ContainerCheckBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Checkbox = styled.input`
    position: relative;
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #ccc;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    margin-right: 20px;

    &:before {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #FFF;
        transition: all 0.2s ease-in-out;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:checked {
        border-color: ${colors.pink};

        &:before {
            background-color: ${colors.pink};
        }
    }
`;

export const AdressSelected = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    padding: 17px;
    
    >div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    >div:first-child div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: ${colors.whiteGray};
        border-radius: 40px;
        margin-right: 26px;
    }

    >div:first-child div:first-child img {
        width: 24px;
        height: 24px;
    }

    p {
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.blackGray};
        margin-bottom: 0;
    }

    span {
        font-family: ${fonts.regular};
        font-size: 12px;
        color: ${colors.blackGray};
    }

    button {
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.pink};
        background-color: transparent;
        margin-left: 20px;
    }
`;

export const ContainerDeliveryOptions = styled.div`
    height: 100px;
`;

export const AdvertiseCard = styled.div`
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    padding: 20px 20px 0px 20px;
    width: 500px;
    
    >div:first-child {
        display: flex;
        padding-bottom: 10px;
    }

    >div:first-child div:last-child {
        display: flex;
        flex-direction: column;
        padding-left: 18px;
    }

    >div:first-child div:last-child h1 {
        font-family: ${fonts.medium};
        font-size: 18px;
        color: ${colors.blackGray};
        margin-bottom: 7px;
    }

    >div:first-child div:last-child span {
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.blackGray};
        margin-bottom: 16px;
    }

    >div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid ${colors.gray};
        height: 50px;

        span {
            font-family: ${fonts.medium};
            font-size: 18px;
            color: ${colors.grayMedium};
        }

        span:last-child {
            color: ${colors.pink};
        }
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }

    @media screen and (max-width: 900px) {
        width: calc(100% - 40px);

        >div:first-child >div:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 150px;
            height: 150px;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        >div:first-child div:last-child {
            padding-left: 0px;
        }

        >div:first-child {
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1100px) {
        width: calc(100% - 40px);
    }
`;

export const SafetyTip = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    max-width: 450px;

    >span {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.grayMedium};
        margin-left: 10px;
    }

    span span {
        color: ${colors.pink};
    }
`;

export const RedirectPayment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    span {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.grayMedium};
        margin-bottom: 20px;
    }

    span span {
        font-family: ${fonts.medium};
        color: ${colors.pink};
        cursor: pointer;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 370px;
        padding: 20px;
        height: 48px;
        border-radius: 5px;
        background-color: ${colors.pink};
        font-family: ${fonts.medium};
        font-size: 16px;
        color: ${colors.white};
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: ${colors.pinkHover};
    }

    @media screen and (max-width: 900px) {
        padding: 40px 20px 40px 20px;

        span {
            text-align: center;
        }

        button {
            width: 100%;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1100px) {
        padding: 40px 20px 40px 20px;
    }
`;

export const PaymentMethod = styled.div`
    div >div {
        margin-bottom: 40px;
    }

    span {
        font-family: ${fonts.medium} !important;
        font-size: 14px !important;
        color: ${colors.blackGray} !important;
    }
`;