import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export const ContainerBasic = styled.div`
    max-width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.gray};
    position: relative;
`

export const LogoBasic = styled.img`
    width: 104px;
    height: 42px;
`

export const ImageBackButton = styled.img`
    position: absolute;
    left: 100px;
    width: 17.5px;
    height: 17.5px;
    cursor: pointer;
`

export const ContainerPrincipal = styled.div`
    position: relative;
    max-width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray};
    align-items: center;
    padding: 0 50px 0 50px;

    div {
        display: flex;
    }

    div img {
        width: 104px;
        height: 42px;
    }

    div p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.blackGray};
        padding: 0 18px 0 18px;
        cursor: pointer;
    }

    div p:hover {
        color: ${colors.black};
    }

    button:not(.btn-mobile) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 125px;
        padding: 0 10px;
        height: 48px;
        background-color: ${colors.pink};
        color: ${colors.white};
        font-family: ${fonts.medium};
        font-size: 16px;
        border-radius: 5px;
        margin-left: 48px;
        color: ${colors.white};
    }

    button:not(.btn-mobile) img {
        width: 24px;
        height: 24px;
        margin-left: 15px;
    }

    button:not(.btn-mobile):hover {
        background-color: ${colors.pinkHover};
    }

    .btn-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        background-color: transparent;
        cursor: pointer;
    }

    .btn-mobile img {
        width: 24px;
        height: 24px;
    }

    @media screen and (max-width: 900px) {
        padding: 0 20px;

        div p {
            display: none;
        }

        div button:not(.btn-mobile) {
            display: none;
        }

        div img {
            width: 90px;
            height: auto;
        }

        .btn-mobile {
            display: flex;
        }
    }
`

export const NavbarMobile = styled.div`
    width: 275px;
    position: absolute;
    top: 79px;
    bottom: 0;
    left: 0;
    flex-direction: column;
    padding: 20px 20px;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.gray};
    transition: 300ms ease-in;
    z-index: 5;

    p {
        display: flex;
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.blackGray};
        padding: 25px 0;
        cursor: pointer;
    }

    p:hover {
        color: ${colors.black};
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        background-color: ${colors.pink};
        color: ${colors.white};
        font-family: ${fonts.medium};
        font-size: 16px;
        border-radius: 5px;
        color: ${colors.white};
        margin-top: 25px;
    }

    button img {
        width: 24px;
        height: 24px;
        margin-left: 15px;
    }

    button:hover {
        background-color: ${colors.pinkHover};
    }
`

export const BackgroundOffCanvas = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 79px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(48, 48, 48, 50%);
    z-index: 1;
`;