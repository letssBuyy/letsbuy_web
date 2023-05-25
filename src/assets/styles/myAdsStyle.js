import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    width: calc(100% - 200px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px 100px;

    @media screen and (max-width: 900px) {
        padding: 50px 20px;
    }
`;

export const Title = styled.p`
  color: ${colors.blackGray};
  font-family: '${fonts.semiBold}';
  font-size: 20px;
  margin-bottom: 40px;
`

export const TabBar = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${colors.gray};
`;

export const ItemTabBar = styled.div`
    width: 20%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${fonts.medium};
    font-size: 16px;
    color: ${colors.grayMedium};
    border-bottom: 1px solid transparent;
    border-color: ${background => background};
    cursor: pointer;
`;