import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { fonts } from "../utils/fonts";
import { colors } from "../utils/colors";

const rotateArrow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  width: 335px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border: none;
  padding: 25px;
  cursor: pointer;
  font-family: ${fonts.medium};
  font-size: 14px;
  color: ${colors.grayMedium};
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  justify-content: space-between;
`;

const Content = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) =>
    isOpen ? css`${fadeIn} 0.3s` : css`${fadeOut} 0.3s`};
  
  div {
    height: 40px;
    font-family: ${fonts.medium};
    font-size: 14px;
    color: ${colors.grayMedium};
  }
`;

const CustomDropdown = ({ optionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('Publicados');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option) => {
    setOption(option)
    optionSelected(option)
    toggleDropdown()
  };

  return (
    <Container>
      <ToggleButton onClick={toggleDropdown}>
        {option}
      </ToggleButton>
      <Content isOpen={isOpen}>
        <div style={option == 'Publicados' ? {display: 'none'} : {display: 'flex'}} onClick={() => handleOption('Publicados')}>Publicados</div>
        <div style={option == 'Vendidos' ? {display: 'none'} : {display: 'flex'}} onClick={() => handleOption('Vendidos')}>Vendidos</div>
        <div style={option == 'Inativos' ? {display: 'none'} : {display: 'flex'}} onClick={() => handleOption('Inativos')}>Inativos</div>
        <div style={option == 'Desativados' ? {display: 'none'} : {display: 'flex'}} onClick={() => handleOption('Desativados')}>Desativados</div>
      </Content>
    </Container>
  );
};

export default CustomDropdown;