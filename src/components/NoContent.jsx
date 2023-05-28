import React from "react";
import noContent from "../assets/images/icon-no-content.svg"
import styled from "styled-components";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

export default function NoContent(props) {
    return (
        <>
            <Container>
                <img src={noContent} alt={props.accessibilityMessage} />
                <p>{props.message}</p>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    img {
        width: 50px;
        height: 50px;
    }

    p {
        text-align: center;
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.grayMedium};
        margin-top: 50px;
    }
`;