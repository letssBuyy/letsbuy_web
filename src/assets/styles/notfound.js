import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 380px;
    height: 250px;
`;

export const Title = styled.p`
    max-width: 630px;
    color: ${colors.blackGray};
    font-family: '${fonts.medium}';
    font-size: 16px;
    text-align: center;
    margin-top: 80px;
`

export const Button = styled.button`
    width: 125px;
    height: 48px;
    background-color: ${colors.pink};
    color: ${colors.white};
    font-family: ${fonts.medium};
    font-size: 18px;
    border-radius: 5px;
    margin-top: 40px;
    color: ${colors.white};
`