import styled from "styled-components"
import { colors } from "../../utils/colors"
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 10%;
`;

export const InfoUser = styled.div`
    display: flex;
    margin-top: 57px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
    }
`;

export const ProfileIcon = styled.div`
    width: 100px;
    height: 100px;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50px;
    }
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 38px;

    h1 {
        font-family: ${fonts.semiBold};
        font-size: 25px;
        color: ${colors.black};
        margin: 0 0 16px 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: left;
        margin-bottom: 16px;
    }

    div span {
        margin-left: 10px;
    }

    span {
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.black};
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-left: 0;
        margin-top: 20px;
    }
`;

export const ContainerAdvertise = styled.div`
    display: flex;
    flex-direction: column;

    >div:first-child {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid ${colors.gray};
    }

    @media screen and (max-width: 600px) {
        >div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const TabContainer = styled.div`
  width: 300px;
  height: 48px;
  display: flex;
  margin-top: 13px;

  @media screen and (max-width: 600px) {
       width: 100%
    }
`;

export const TabButton = styled.button`
  width: 50%;
  height: 100%;
  background-color: ${(props) =>
        props.selected ? "#F14866" : "#F9F9F9"};
  color: ${(props) => (props.selected ? "white" : "#555555")};
  cursor: pointer;
  border: 1px solid ${colors.pink};
  transform: ${props =>
        props.active ? "translateY(-2px)" : "translateY(2px)"};
  transition: all 0.3s ease-in-out;
`;

export const OrdinationSelect = styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    border-radius: 5px;
    font-size: 14px;
    color: ${colors.blackGray};
    cursor: pointer;
    margin-top: 13px;

    img {
        cursor: pointer;
        margin-left: 10px;
    }

    select {
        padding: 15px 15px 15px 10px;
        appearance: none;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    select:focus-within option {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
       width: 100%;
       margin-top: 25px;
    }
`;

export const ListAdvertise = styled.div`
    margin: 30px 0 80px 0;
    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: center;
    place-content: stretch center;
    flex-wrap: wrap;
    min-height: 200px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    }
`;