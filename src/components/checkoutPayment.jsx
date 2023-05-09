import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export default function StepProgressBar(props) {
    return (
        <Container>
            <ProgressBarBackground />
            <ProgressBar>
                <ProgressStep>
                    <ProgressCircle>
                        <CheckIcon>✔</CheckIcon>
                    </ProgressCircle>
                    <ProgressLabel>Pedido recebido</ProgressLabel>
                </ProgressStep>
                <ProgressStep>
                    <ProgressCircle>
                        <CheckIcon>✔</CheckIcon>
                    </ProgressCircle>
                    <ProgressLabel>Pagamento processado</ProgressLabel>
                </ProgressStep>
                <ProgressStep>
                    <ProgressCircle>
                    </ProgressCircle>
                    <ProgressLabel>A caminho</ProgressLabel>
                </ProgressStep>
                <ProgressStep>
                    <ProgressCircle>
                    </ProgressCircle>
                    <ProgressLabel>Entregue</ProgressLabel>
                </ProgressStep>
            </ProgressBar>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: center;
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.pink};
  transition: width 0.5s ease-in-out;
  position: absolute;
  top: 50%;
  margin-top: -1px;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 580px;
  position: relative;
  z-index: 1;
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressCircle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${({ completed }) => completed ? colors.pink : colors.grayTwo};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.span`
  font-size: 16px;
  color: ${colors.white};
`;

const ProgressLabel = styled.div`
  font-size: 12px;
  color: ${colors.black};
  text-align: center;
  font-family: ${fonts.medium};
`;