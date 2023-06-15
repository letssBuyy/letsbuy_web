import React from "react";
import styled from "styled-components";
import edit from "../assets/images/icon-edit.svg";
import trash from "../assets/images/icon-trash.svg";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import Accordion from "./Accordion";
import { toUppercasedString } from "../utils/strings";
import { useNavigate } from "react-router-dom";
import { question, successAlert, errorAlert } from "../utils/alerts";
import { url } from "../utils/request";
import axios from "axios";
import { formatCurrency } from "../utils/strings";
import moment from "moment";
import ImageDefault from "../assets/images/image-default.png";

export default function CardMyAds(props) {
    let type = props.type;
    const idUser = props.item && props.item.userId ? props.item.userId : '';
    const id = props.item.id;
    const title = props.item.title;
    const price = props.item.price;
    const imageAdversiment = props.item && props.item.images && props.item.images.length ? props.item.images[0].url : ImageDefault;
    const date = moment(props.item.postDate).format("DD/MM/YYYY");

    const salleDate = props.item && props.item.saleDate ? props.item.saleDate : '';

    const buyerName = props.item && props.item.buyer && props.item.buyer.name ? props.item.buyer.name : '';

    const buyerCep = props.buyer && props.buyer.cep ? props.buyer.cep : '';
    const buyerRoad = props.buyer && props.buyer.road ? props.buyer.road : '';
    const buyerNumber = props.buyer && props.buyer.number ? props.buyer.number : '';
    const buyerNeighborhood = props.buyer && props.buyer.neighborhood ? props.buyer.neighborhood : '';
    const buyerComplement = props.buyer && props.buyer.complement ? props.buyer.complement : '';
    const buyerCity = props.buyer && props.buyer.city ? props.buyer.city : '';
    const buyerState = props.buyer && props.buyer.state ? props.buyer.state : '';
    const isShipment = props.item && props.item.isShipment ? props.item.isShipment : false
    const statusAd = props.item && props.item.trackings && props.item.trackings.length ? props.item.trackings.length + 1 : 1

    let navigate = useNavigate();

    function showModalDelete() {
        question(
            "Você tem certeza?",
            "Essa ação não pode ser revertida",
            "Sim, apagar",
            () => deleteAd()
        )
    }

    async function deleteAd() {
        await axios.delete(`${url}/adversiments/${id}`).then(() => {
            successAlert("Anúncio excluido com sucesso!")
        }).catch(() => {
            errorAlert("Ocorreu um erro ao excluir o anúncio.")
        })
    }

    function editAd() {
        navigate(`/editar-anuncio/${id}`)
    }

    async function changeStatusOrder() {
        await axios.post(`${url}/trackings/${idUser}/${id}`, {
            status: 'SENT',
            adversiment: {
                id: id
            }
        }).then(() => {
            successAlert("Status atualiado com sucesso!")
        }).catch(() => {
            errorAlert("Ocorreu um erro ao atualizar o status do anúncio.")
        })
    }

    function getStatusButton() {
        if (statusAd === 3) {
            return <button onClick={() => { changeStatusOrder() }}>Enviei o pedido!</button>;
        } else if (statusAd === 6) {
            return <ButtonDisabled disabled={true}>Aguardando confirmação</ButtonDisabled>;
        } else if (statusAd === 7) {
            return <ButtonDisabled disabled={true}>Entregue</ButtonDisabled>;
        } else {
            return null; // Caso nenhum dos valores seja correspondente, retorna null ou outra ação desejada.
        }
    }

    switch (type) {
        case "progress":
            return <>
                <Card>
                    <LeftSide>
                        <img src={imageAdversiment ? imageAdversiment : ImageDefault} alt="anuncio" />
                        <div>
                            <h1>{title}</h1>
                            <p>{formatCurrency(price)}</p>
                            <span>Criado em: {date}</span>
                        </div>
                    </LeftSide>
                    <RightSide>
                        <div>
                            <button onClick={() => { editAd() }}>
                                <img src={edit} alt="Editar anúncio" />
                            </button>
                            <button onClick={() => { showModalDelete() }}>
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
                                <img src={imageAdversiment ? imageAdversiment : ImageDefault} alt="anuncio" />
                                <div>
                                    <h1>{title}</h1>
                                    <p>{formatCurrency(price)}</p>
                                    <span>Criado em: {date}</span>
                                </div>
                            </LeftSideAccordion>
                            <RightSideAccordion>
                                <div></div>
                                <div>
                                    {getStatusButton()}
                                </div>
                            </RightSideAccordion>
                        </CardAccordion>
                    }
                    content={
                        <div>
                            <Content>
                                <div>
                                    <p>Informações do comprador</p>
                                    <span>Comprado por: {toUppercasedString(buyerName)}</span>
                                    <span>{salleDate}</span>
                                    <span>ID do anúncio: {id}</span>
                                </div>
                                <div>
                                    <p>Endereço de entrega</p>
                                    {
                                        isShipment ?
                                            <>
                                                <span>{buyerRoad}, {buyerNumber} - {buyerCep}</span>
                                                <span>{buyerNeighborhood}</span>
                                                <span>{buyerCity - buyerState}</span>
                                                <span>{buyerComplement}</span>
                                            </>
                                            :
                                            <>
                                                <span>O comprador irá retirar o produto pessoalmente.</span>
                                                <span>Por favor, entre em contato com ele através do chat para combinar os detalhes da retirada.</span>
                                            </>
                                    }
                                </div>
                            </Content>
                        </div>
                    }
                />
            </>
        case "disabled":
            return <>
                <CardDisabled>
                    <LeftSide>
                        <img src={imageAdversiment ? imageAdversiment : ImageDefault} alt="anuncio" />
                        <div>
                            <h1>{title}</h1>
                            <p>{formatCurrency(price)}</p>
                            <span>Criado em: {date}</span>
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

export const ButtonDisabled = styled.button`
    background-color: ${colors.grayMedium} !important;
`;