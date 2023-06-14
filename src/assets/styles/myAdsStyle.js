import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 90px 100px;

    @media screen and (max-width: 900px) {
        padding: 50px 20px;
        align-items: center;
    }
`;

export const HEADERPAGE = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 48px;
        background-color: ${colors.pink};
        color: ${colors.white};
        font-family: ${fonts.medium};
        font-size: 16px;
        border-radius: 5px;
        color: ${colors.white};
        margin-top: 25px;
    }
`;

export const Title = styled.p`
  color: ${colors.blackGray};
  font-family: '${fonts.semiBold}';
  font-size: 20px;
  margin-bottom: 40px;
  margin-top: 90px;
  height: 48px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 20px;
  }
`

export const TabBar = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${colors.gray};

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const TabbarMobile = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: flex;
        width: 100%;
    }
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
    cursor: pointer;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 50px 0;
`;