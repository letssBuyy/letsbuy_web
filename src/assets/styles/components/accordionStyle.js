import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export const AccordionWrapper = styled.div`
  border: 1px solid ${colors.gray};
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const ContainerCheckout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 15px;
  font-weight: bold;
  cursor: pointer;

  >div:first-child div {
    margin-left: 20px;
  }

  >div:first-child {
    display: flex;

    img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }

    h1 {
      font-family: ${fonts.medium};
      font-size: 16px;
      color: ${colors.black};
      margin-bottom: 5px;
    }

    p {
      font-family: ${fonts.regular};
      font-size: 14px;
      color: ${colors.blackGray};
      margin-bottom: 5px;
    }

    span {
      font-family: ${fonts.semiBold};
      font-size: 16px;
      color: ${colors.pink};
      margin-bottom: 5px;
    }
  }

  >div:last-child button {
    width: 155px;
    height: 48px;
    background-color: ${colors.pink};
    font-family: ${fonts.medium};
    font-size: 14px;
    color: ${colors.white};
    cursor: pointer;
    border-radius: 5px;
  }

  @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;

      >div:last-child button {
        width: 200px;
        margin-top: 40px;
      }
    }
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.gray};

  >div {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  >p {
      font-family: ${fonts.medium};
      font-size: 16px;
      color: ${colors.black};
      margin: 10px 0;
  }

  >span {
    max-width: 260px;
    font-family: ${fonts.medium};
      font-size: 14px;
      color: ${colors.blackGray};
      margin-bottom: 10px;
  }
`;

export const ButtonDisabled = styled.button`
  cursor: default !important;
  background-color: #ACACAC !important;
`;