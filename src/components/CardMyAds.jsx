import React from "react";
import styled from "styled-components";
import edit from "../assets/images/icon-edit.svg";
import trash from "../assets/images/icon-trash.svg";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import Accordion from "./Accordion";
import { toUppercasedString } from "../utils/strings";

export default function CardMyAds(props) {
    let type = props.type

    switch (type) {
        case "progress":
            return <>
                <Card>
                    <LeftSide>
                        <img src="https://i.imgur.com/fwOCAJz.png" alt="anuncio" />
                        <div>
                            <h1>Bolsa marrom</h1>
                            <p>R$ 200,00</p>
                            <span>Criado em: 10/05/2024</span>
                        </div>
                    </LeftSide>
                    <RightSide>
                        <div>
                            <button>
                                <img src={edit} alt="Editar anúncio" />
                            </button>
                            <button>
                                <img src={trash} alt="Apagar anúncio" />
                            </button>
                        </div>
                        <div></div>
                    </RightSide>
                </Card>
            </>
        case "sale":
            return <>
                <Accordion
                    headerHTML={
                        <CardAccordion>
                            <LeftSideAccordion>
                                <img src="https://i.imgur.com/fwOCAJz.png" alt="anuncio" />
                                <div>
                                    <h1>Bolsa marrom</h1>
                                    <p>R$ 200,00</p>
                                    <span>Criado em: 10/05/2024</span>
                                </div>
                            </LeftSideAccordion>
                            <RightSideAccordion>
                                <div></div>
                                <div>
                                    <button>pedido enviado</button>
                                </div>
                            </RightSideAccordion>
                        </CardAccordion>
                    }
                    content={
                        <div>
                            <Content>
                                <div>
                                    <p>Informações do pedido</p>
                                    <span>Vendido por: {toUppercasedString("andré luiz rodrigues")}
                                        CPF: {"52355271860".substring(0, 3)}.***.***-**</span>
                                    <span>22/05/2023</span>
                                    <span>ID do anúncio: 0103920</span>
                                </div>
                                <div>
                                    <p>Endereço de entrega</p>
                                    <span>Rua Sabbado D’Angelo, 281 - 08210790
                                        Apartamento 1007, torre B</span>
                                </div>
                            </Content>
                        </div>
                    }
                />
            </>
        case "inactive":
            return <>
                <Card>
                    <LeftSide>
                        <img src="https://i.imgur.com/fwOCAJz.png" alt="anuncio" />
                        <div>
                            <h1>Bolsa marrom</h1>
                            <p>R$ 200,00</p>
                            <span>Criado em: 10/05/2024</span>
                        </div>
                    </LeftSide>
                    <RightSide>
                        <div></div>
                        <div>
                            <button>reativar anúncio</button>
                        </div>
                    </RightSide>
                </Card>
            </>
        case "disabled":
            return <>
                <CardDisabled>
                    <LeftSide>
                        <img src="https://i.imgur.com/fwOCAJz.png" alt="anuncio" />
                        <div>
                            <h1>Bolsa marrom</h1>
                            <p>R$ 200,00</p>
                            <span>Criado em: 10/05/2024</span>
                        </div>
                    </LeftSide>
                </CardDisabled>
            </>
        default:
            break;
    }
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    margin-bottom: 30px;

    @media screen and (max-width: 550px) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
`;

const CardDisabled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    background-color: ${colors.whiteGrayTwo};
    margin-bottom: 30px;
    @media screen and (max-width: 550px) {
        padding-left: 10px;
    }
`;

const LeftSide = styled.div`
    display: flex;
    margin-left: 22px;

    img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 25px;
    }

    h1 {
      font-family: ${fonts.medium};
      font-size: 16px;
      color: ${colors.black};
      margin-bottom: 5px;
    }

    p {
      font-family: ${fonts.semiBold};
      font-size: 16px;
      color: ${colors.pink};
      margin-bottom: 5px;
    }

    span {
      font-family: ${fonts.regular};
      font-size: 12px;
      color: ${colors.grayMedium};
      margin-bottom: 5px;
    }

    @media screen and (max-width: 550px) {
        margin: 20px 0;
    }
`;

const RightSide = styled.div`
    display: flex;
    margin-right: 22px;
    align-items: center;

    div:first-child button {
        width: 24px;
        height: 24px;
        background-color: transparent;
        margin: 0 10px;
    }

    div:first-child button:last-child {
        width: 24px;
        height: 24px;
        background-color: transparent;
        margin-right: 20px;
    }

    div:last-child button {
        width: 155px;
        height: 48px;
        background-color: ${colors.pink};
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.white};
        cursor: pointer;
        border-radius: 5px;
    }

    @media screen and (max-width: 550px) {
        margin: 20px 0;
    }
`;

const CardAccordion = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;

    @media screen and (max-width: 550px) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
`;

const LeftSideAccordion = styled.div`
    display: flex;
    margin-left: 6px;

    img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 25px;
    }

    h1 {
      font-family: ${fonts.medium};
      font-size: 16px;
      color: ${colors.black};
      margin-bottom: 5px;
    }

    p {
      font-family: ${fonts.semiBold};
      font-size: 16px;
      color: ${colors.pink};
      margin-bottom: 5px;
    }

    span {
      font-family: ${fonts.regular};
      font-size: 12px;
      color: ${colors.grayMedium};
      margin-bottom: 5px;
    }

    @media screen and (max-width: 550px) {
        margin: 20px 0;
    }
`;

const RightSideAccordion = styled.div`
    display: flex;
    margin-right: 22px;
    align-items: center;

    div:first-child button {
        width: 24px;
        height: 24px;
        background-color: transparent;
        margin: 0 10px;
    }

    div:first-child button:last-child {
        width: 24px;
        height: 24px;
        background-color: transparent;
        margin-right: 20px;
    }

    div:last-child button {
        width: 155px;
        height: 48px;
        background-color: ${colors.pink};
        font-family: ${fonts.medium};
        font-size: 14px;
        color: ${colors.white};
        cursor: pointer;
        border-radius: 5px;
    }

    @media screen and (max-width: 550px) {
        margin: 20px 0;
    }
`;

export const Content = styled.div`
  overflow: hidden;
  transition: height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.gray};

  >div {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  >div p {
      font-family: ${fonts.medium};
      font-size: 16px;
      color: ${colors.black};
      margin: 10px 0;
  }

  >div span {
    max-width: 260px;
    font-family: ${fonts.medium};
      font-size: 14px;
      color: ${colors.blackGray};
      margin-bottom: 10px;
  }
`;