import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts';

export const Container = styled.div`
    max-width: 630px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 55px auto 0 auto;

    > div {
      width: 100%;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 500px) {
      padding: 20px;
    }
`;

export const Title = styled.p`
  color: ${colors.black};
  font-family: '${fonts.semiBold}';
  font-size: 22px;
  margin-bottom: 50px;
  margin-top: 40px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 0px;
  }
`
export const Description = styled.div`
    font-family: ${fonts.regular};
    font-size: 16px;
    color: ${colors.black};
    margin: 0px 0 42px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
`
export const ChangeWindow = styled.button`
  width: 300px;
  height: 48px;
  background-color: ${colors.pink};
  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.white};
  cursor: pointer;
  margin: 20px 0;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: 250px;
  }
`;