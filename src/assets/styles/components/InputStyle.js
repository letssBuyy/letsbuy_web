import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export const Label = styled.span`
    font-family: ${fonts.medium};
    font-size: 14px;
    color: ${colors.blackGray};
`

export const InputContainer = styled.div`
    width: 100%;
    min-width: 100%; 
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 12px;
    background-color: ${props => props.disabled ? "#ECECEC" : 'transparent'};

    input, select {
        width: 100%;
        border: 0;
        border-radius: 0;
        background-color: 0;
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.grayMedium};
        outline: none;
    }

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

export const TextAreaContainer = styled.div`
    width: 100%;
    min-width: 100%; 
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    padding: 5px 15px;
    box-sizing: border-box;
    margin-top: 12px;
    
    textarea {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 90%;
        max-height: 90%;
        min-height: 90%;
        border: 0;
        border-radius: 0;
        background-color: 0;
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.grayMedium};
        outline: none;
    }

    textarea::-webkit-scrollbar {
        display: none;
    }

    span {
        width: 100%;
        text-align: end;
        font-size: 14px;
        font-family: ${fonts.regular};
        color: ${colors.grayMedium};
    }
`;

export const ImagesContainer = styled.div`
    width: 100%;
    
    >div:first-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed ${colors.pink};
        height: 220px;
        border-radius: 5px;
        position: relative;
    }

    input[type="file"] {
        display: none;
    }

    label {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    >div {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
    }

    >div div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border: 1px dashed ${colors.gray};
        border-radius: 5px;
        position: relative;
    }

    @media screen and (max-width: 500px) {
    
        >div {
            flex-wrap: wrap;
        }

        >div div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 100px;
        margin: 10px 0;
        border: 1px dashed ${colors.gray};
        border-radius: 5px;
        position: relative;
    }

    }
`;

export const ImagemSelecionada = styled.img`
    width: 100%;
    height: 100%;
    background-color: aliceblue;
`;

export const ContainerError = styled.div`   
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 15px;
    
    span {
        font-family: ${fonts.regular};
        font-size: 14px;
        color: ${colors.red};
        text-align: left;
        margin-left: 5px;
    }

    img {
        width: 16px;
        height: 16px;
    }
`;

export const CoupleInputs = styled.div`
  display: flex;
  margin-top: 20px;

  div span {
    font-family: ${fonts.regular};
    font-size: 12px;
    color: ${colors.grayMedium};
  }

  input {
    width: 90%;
    height: 48px;
    outline: none;
    border: none;
    background-color: 0;
    font-size: 14px;
    font-family: ${fonts.regular};
    color: ${colors.grayMedium};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    padding: 0 15px;
    box-sizing: border-box;
    margin-top: 12px;
  }
`;