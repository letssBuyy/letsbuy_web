import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    max-width: 376px;
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
  color: ${colors.blackGray};
  font-family: '${fonts.semiBold}';
  font-size: 20px;
  margin-bottom: 40px;
`

export const ForgotPassword = styled.button`
  font-family: ${fonts.medium};
  font-size: 14px;
  color: ${colors.pink};
  cursor: pointer;
  margin-left: auto;
  background-color: transparent;
`;

export const SignIn = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${colors.pink};
  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.white};
  cursor: pointer;
  margin: 20px 0;
  border-radius: 5px;
`;

export const SignUp = styled.button`
  width: 100%;
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.pink};
  cursor: pointer;
  background-color: transparent;
`;