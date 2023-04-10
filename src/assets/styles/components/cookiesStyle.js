import styled from 'styled-components';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

export const CookieBannerWrapper = styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    border-radius: 20px;
    background-color: #FFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

export const CookieIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const CookieMessage = styled.p`
    font-family: ${fonts.medium};
    font-size: 14px;
    margin-right: 16px;
`;

export const AcceptButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${colors.pink};
  font-family: ${fonts.regular};
  font-size: 16px;
  padding: 8px 16px;
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #FF6883;
  }
`;