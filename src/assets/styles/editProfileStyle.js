import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 100px;

    @media screen and (max-width: 900px) {
        padding: 20px;
    }
`;

export const Title = styled.p`
  font-family: ${fonts.semiBold};
  font-size: 20px;
  color: ${colors.blackGray};
  margin: 50px 0 70px 0;
`;

export const ContainerInputs = styled.div`
  padding: 30px;

  >div {
    margin: 30px 0;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  input[type="file"] {
    display: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 1px solid ${colors.gray};
  }

  h1 {
    font-family: ${fonts.semiBold};
    font-size: 14px;
    color: ${colors.blackGray};
    margin: 20px;
  }

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonUpdate = styled.button`
  width: 400px;
  padding: 0 40px;
  background-color: ${colors.pink};
  height: 48px;
  border-radius: 5px;

  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.white};

  margin: 0 auto;
`;