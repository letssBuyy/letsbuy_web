import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 10%;
    border-top: 1px solid ${colors.gray};

    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
export const Presentation = styled.div`
    display: flex;
    flex-direction: column;

    >img {
        width: 100px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    
    >span {
        font-family: ${fonts.light};
        font-size: 13px;
        color: ${colors.blackGray};
    }

    >span span {
        color: ${colors.pink};
    }

    >div {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }
    
    div img {
        width: 24px;
        height: 24px;
        margin: 10px;
        cursor: pointer;
    }

    div span {
        font-family: ${fonts.semiBold};
        font-size: 14px;
        color: ${colors.blackGray};
        margin-bottom: 14px;
    }

    @media screen and (max-width: 900px) {
        justify-content: center;
        align-items: center;
        margin: 20px 0;

        >div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;
export const SpeedLinks = styled.div`
    display: flex;

    div {
        margin: 0 20px;
    }

    span {
        font-family: ${fonts.semiBold};
        font-size: 14px;
        color: ${colors.blackGray};
        margin-bottom: 12px;
    }

    ul li {
        font-family: ${fonts.medium};
        font-size: 12px;
        color: ${colors.grayMedium};
        cursor: pointer;
        margin: 20px 0;
    }

    ul li:hover {
        color: ${colors.blackGray};
    }

    @media screen and (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;

        div {
            width: 100px;
            margin: 30px 10px;
        }
    }
`;

export const BaseFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-family: ${fonts.medium};
    font-size: 12px;
    color: ${colors.grayMedium};
    border-top: 1px solid ${colors.gray};
`;