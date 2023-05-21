import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import iconHelp from "../assets/images/icon-helpdesk.svg"

export default function Helpdesk() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <FormContainer onClick={handleFormToggle}>
        <Text>Não recebeu o produto?</Text>
        <Icon>
          <img src={iconHelp} alt="Não recebeu o produto?" />
        </Icon>
      </FormContainer>
    </>
  )
}

// Estilização do componente
const FormContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
`;

const Icon = styled.div`
  background-color: ${colors.pink};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  margin-right: 10px;
  font-size: 14px;
  font-family: ${fonts.medium};
  color: ${colors.black};
`;
