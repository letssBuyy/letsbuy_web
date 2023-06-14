import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const steps = [
  { label: 'Pedido criado' },
  { label: 'Aguardando pagamento' },
  { label: 'Aguardando envio' },
  { label: 'Enviado' },
  { label: 'Em trânsito' },
  { label: 'Aguardando confirmação de recebimento' },
  { label: 'Entregue' },
];

export default function StepProgressBar(props) {
  const etapa = props.etapa -1;

  return (
    <Container>
      <ProgressBar>
        {steps.map((step, index) => (
         <>
          <ProgressStep key={index}>
            {index <= etapa ? (
              <ProgressCircle backgroundColor={index <= etapa ? colors.pink : colors.gray}>
                <CheckIcon>✔</CheckIcon>
              </ProgressCircle>
            ) : (
              <ProgressCircle backgroundColor={index <= etapa ? colors.pink : colors.gray}>
                <StepNumber></StepNumber>
              </ProgressCircle>
            )}
            <ProgressLabel>{step.label}</ProgressLabel>
          </ProgressStep>
          {
            index < 6 ?
            <LineStep backgroundColor={index < etapa ? colors.pink : colors.gray}></LineStep>
            : 
            <></>
          }
         </>
        ))}
      </ProgressBar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 580px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    margin: 48px 33px;
  }
`;

const ProgressCircle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor };
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.span`
  font-size: 16px;
  color: ${colors.white};
`;

const StepNumber = styled.span`
  font-size: 16px;
  color: ${colors.white};
`;

const ProgressLabel = styled.div`
  font-size: 12px;
  color: ${colors.black};
  text-align: center;
  font-family: ${fonts.medium};

  @media screen and (max-width: 900px) {
    margin-left: 5px;
  }
`;

const LineStep = styled.div`
  display: flex;
  width: 20%;
  height: 2px;
  background-color: ${({ backgroundColor }) => backgroundColor };
 
  @media screen and (max-width: 900px) {
    width: 90px;
    transform: rotate(90deg);
  }
`;