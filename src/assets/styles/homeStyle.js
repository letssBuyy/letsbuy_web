import styled from "styled-components";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const IndexSection = styled.section`
  width: 100%;

  >div {
    margin: 100px 0 100px 0;
  }

  p {
    font-size: 35px;
    font-family: ${fonts.semiBold};
    color: ${colors.black};
    text-align: center;
    margin-bottom: 55px;
  } 

  span {
    color: ${colors.pink};
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 70px;
    >div {
      margin: 70px 0 0px 0;
    }

    p {
      font-size: 25px;
    }
  }
`

export const ResultSearch = styled.div`
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 58px;
  z-index: 1;
  background-color: white;
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  filter: drop-shadow(1px 2px 5px rgba(122, 122, 122, 0.25));

  div {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }

  div:hover {
    background-color: #FBFBFB;
  }

  p {
    font-family: ${fonts.regular};
    color: ${colors.grayMedium};
    font-size: 14px;
    padding: 0;
    margin: 0 0 0 20px;
  }
`;

export const ContainerSarchAndInput = styled.div`
  position: relative;
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  height: 48px;
  
  input {
    margin-left: 30px;
    width: 90%;
    outline: none;
    border: none;

    font-family: ${fonts.regular};
    color: ${colors.grayMedium};
    font-size: 14px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 30px;
  }

  @media screen and (max-width: 500px) {
    input {
      margin-left: 15px;
    }

    img {
      margin-right: 15px;
    }
  }
`;

export const CardsSection = styled.section`
  margin-bottom: 50px;
`

export const CategorysSection = styled.section`

`

export const TitleSection = styled.span`
  font-family: ${fonts.regular};
  font-size: 20px;
  color: ${colors.blackGray};
`;

export const CardList = styled.div`
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
`;

export const Padding = styled.div`
  padding: 100px 9% 0 9%;
`;