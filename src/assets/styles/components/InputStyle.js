import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export const Label = styled.span`
    font-family: ${fonts.medium};
    font-size: 14px;
    color: ${colors.blackGray};
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 12px;

    input {
        width: 100%;
        border: 0;
        border-radius: 0;
        background-color: 0;
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.grayMedium};
        outline: none;
    }

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

export const ContainerError = styled.div`   
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 15px;
    
    span {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.red};
        text-align: left;
        margin-left: 5px;
    }

    img {
        width: 16px;
        height: 16px;
    }
`;