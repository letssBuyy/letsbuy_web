import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const Loading = (props) => {
    let show = props.isEnabled
  return (
    <Container style={show ? {display: 'flex'} : {display: 'none'}}>
      <BouncingBalls>
        <Ball />
        <Ball />
        <Ball />
      </BouncingBalls>
      <Text>Carregando</Text>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo transparente */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const bounceAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const BouncingBalls = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 8px;
`;

const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${colors.white}; /* Cor das bolinhas */
  margin: 0 4px;
  animation: ${bounceAnimation} 1s infinite ease-in-out;
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Text = styled.div`
font-family: ${fonts.medium};
  font-size: 14px;
  color: ${colors.white};
  margin-top: 20px;
`;

export default Loading;