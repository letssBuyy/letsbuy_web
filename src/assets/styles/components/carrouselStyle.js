import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const Item = styled.div`
    width: auto;
    padding: 12px 30px;
    cursor: pointer;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.blackGray};
        border-radius: 5px;
        background-color: ${colors.whiteGray};
        height: 45px;
        margin-right: 15px;
        text-align: center;
        transition: background-color 0.3s ease;
    }

    p:hover {
        background-color: #E9E9E9;    
    }
`;