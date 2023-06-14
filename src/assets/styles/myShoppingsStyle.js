import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Container = styled.div`
    padding: 80px 100px;
    
    >h1 {
        font-family: ${fonts.semiBold};
        font-size: 20px;
        color: ${colors.blackGray};
        margin-bottom: 50px;
        margin-top: 90px;
    }

    @media screen and (max-width: 900px) {
        padding: 50px 20px;
    }
`