import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 20px 100px;

    @media screen and (max-width: 900px) {
        padding: 20px;
    }
`;

export const ProfileImage = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;

    p {
        color: ${colors.black};
        font-family: ${fonts.regular};
        font-size: 16px;
        margin-left: 16px;
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    
    @media screen and (max-width: 900px) {
       width: 100%;
       display: none;
    }
`;

export const NoContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 470px;

    border: 1px solid ${colors.gray};
    border-right: 0px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        border-right: 1px solid ${colors.gray};
        height: 85vh;
        border-radius: 5px;
    }
`;

export const TopBar = styled.div`
    display: flex;
    border: 1px solid ${colors.gray};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;   
    height: 58px;
    align-items: center;
    justify-content: space-between;
    position: relative;

    div:first-child {
        display: none;
    }

    div {
        cursor: pointer;
        margin-right: 30px;
    }

    @media screen and (max-width: 900px) {
        div:first-child {
            display: flex;
            cursor: pointer;
            margin-left: 30px;
        }
    }
`;

export const ModalMoreOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
    z-index: 5;
    position: absolute;
    top: 58px;
    right: 0px;
    border-radius: 10px;

    button:hover {
        background-color: ${colors.whiteGray};
    }

    button {
        width: 100%;
        padding: 10px 20px;
        background-color: transparent;
        color: ${colors.blackMedium};
        font-family: ${fonts.regular};
        font-size: 16px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    button:last-child {
        color: ${colors.pink};
        font-family: ${fonts.regular};
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${colors.gray};
    border-right: 1px solid ${colors.gray};
    height: 400px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    >p {
        font-size: 13px;
        font-family: ${fonts.medium};
        color: ${colors.blackMediumTwo};
        margin: 20px;
        text-align: center;
    }

    @media screen and (max-width: 900px) {
        height: 70vh;
    }
`;

export const BottomBar = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${colors.gray}; 
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    justify-content: space-between;
    height: 70px;

    input {
        width: 90%;
        height: 80%;
        outline: none;
        border: none;

        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.blackMediumTwo};
        margin-left: 30px;
    }

    button {
        background-color: transparent;
        margin-right: 30px;
    }

    button img {
        width: 20px;
        height: 20px;
    }
`;