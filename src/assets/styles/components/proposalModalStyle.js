import styled, { keyframes } from 'styled-components';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 100px;
  border-radius: 4px;
  opacity: 1;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1000;
`;

export const Title = styled.h1`
    font-family: ${fonts.semiBold};
    font-size: 20px;
    color: ${colors.blackGray};
    margin-bottom: 40px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${colors.pink};
  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.white};
  cursor: pointer;
  margin: 20px 0;
  border-radius: 5px;
  margin-top: 50px;
`;

export const BoxProposal = styled.div`
  display: flex;
  margin: 40px 0;
  
  div {
    margin-left: 22px;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }

  p {
    font-family: ${fonts.medium};
    font-size: 16px;
    color: ${colors.black};
  }

  h1 {
    font-family: ${fonts.semiBold};
    font-size: 25px;
    color: ${colors.pink};
  }
`;