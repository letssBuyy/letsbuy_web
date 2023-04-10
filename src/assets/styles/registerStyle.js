import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts';

export const Checkbox = styled.input`
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: 4px;
    border: 2px solid #F14866;
    background-color: ${props => props.checked ? '#F14866' : 'transparent'};
    background-image: ${props => props.checked ? `url(${require('../images/icon-check.svg').default})` : 'none'};
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    cursor: pointer;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.grayMedium};
        margin: 0 0 0 10px;
    }

    span {
        font-family: ${fonts.medium};
        color: ${colors.pink};
    }
`;