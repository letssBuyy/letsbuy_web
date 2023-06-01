import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts';

export const Container = styled.div`
    padding: 50px 100px;

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 20px;
        color: ${colors.blackGray};
        margin-bottom: 20px;
    }

    >div {
        margin: 30px 0 80px 0;
        display: flex;
        -webkit-box-align: stretch;
        align-items: stretch;
        -webkit-box-pack: center;
        place-content: stretch center;
        flex-wrap: wrap;

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
        }
    }
`;