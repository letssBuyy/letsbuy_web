import styled from "styled-components";
import { fonts } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid ${colors.gray};

    >div:first-child img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
    }

    >div:last-child {
        margin-left: 10px;
    }

    >div:last-child h1 {
        font-size: 14px;
        font-family: ${fonts.medium};
        color: ${colors.black};
        margin-bottom: 5px;
    }

    >div:last-child p {
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.black};
        margin-bottom: 5px;
    }

    >div:last-child span {
        font-size: 12px;
        font-family: ${fonts.light};
        color: ${colors.blackMediumTwo};
    }
`;