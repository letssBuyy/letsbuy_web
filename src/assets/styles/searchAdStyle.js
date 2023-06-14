import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    margin-top: 80px;

    >div:last-child {
        width: 100%;
        padding: 23px 50px 50px 50px;
    }
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    border: 1px solid ${colors.gray};
    background-color: ${colors.white};
    
    >div {
      margin: 20px 10px;
    }

    @media screen and (max-width: 650px) {
      width: 100vw;
      z-index: 2;
      position: absolute;
      display: ${({ isOpen }) => isOpen };
    }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  button {
    background-color: transparent;
  }

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 650px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const ContainerAdvertise = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;

    margin: 30px 0 80px 0;
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

export const SelectOrdenation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.whiteGray};
    width: 153px;
    height: 48px;
    border-radius: 5px;
    padding: 0 10px;

    img {
        width: 15px;
    }

    select {
        padding: 15px 15px 15px 10px;
        appearance: none;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media screen and (max-width: 650px) {
       display: none;
    }
`;

export const OrdinationMobile = styled.div`
    @media screen and (min-width: 650px) {
       display: none;
    }
`;

export const ButtonOpenSideBarMobile = styled.button`
  justify-content: center;
  align-items: center;
  background-color: ${colors.whiteGray};
  width: 100%;
  height: 48px;
  border-radius: 5px;
  display: none;
  
  @media screen and (max-width: 650px) {
    display: flex;
    margin: 20px 0;
  }
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  height: 48px;
  margin-right: 50px;
  
  input {
    margin-left: 20px;
    width: 95%;
    outline: none;
    border: none;

    font-family: ${fonts.regular};
    color: ${colors.grayMedium};
    font-size: 12px;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }

  @media screen and (max-width: 650px) {
    margin-right: 0px !important;
    input {
      margin-left: 15px;
    }

    img {
      margin-right: 15px;
    }
  }
`;

export const Checkbox = styled.input`
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 4px;
    border: 2px solid ${colors.gray};
    background-color: ${props => props.checked ? colors.gray : 'transparent'};
    background-image: ${props => props.checked ? `url(${require('../images/icon-check.svg').default})` : 'none'};
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    cursor: pointer;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.grayMedium};
        margin: 0 0 0 10px;
    }

    span {
        font-family: ${fonts.medium};
        color: ${colors.grayMedium};
    }
`;

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

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  p {
    background-color: transparent;
    font-family: ${fonts.regular};
    color: ${colors.blackGray};
    font-size: 15px;
  }

  button {
    max-width: 300px;
    width: 100%;
    height: 48px;
    background-color: ${colors.pink};
    font-family: ${fonts.medium};
    font-size: 18px;
    color: ${colors.white};
    cursor: pointer;
    margin: 20px 0;
    border-radius: 5px;
  }
`;