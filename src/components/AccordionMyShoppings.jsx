import React, { useState } from "react";
import {
    AccordionWrapper,
    AccordionHeader,
    AccordionContent,
    ButtonDisabled,
    ContainerCheckout
} from "../assets/styles/components/accordionShoppingStyle";
import Checkout from "./checkoutPayment";
import { toUppercasedString } from "../utils/strings";
import { url } from "../utils/request";
import axios from "axios";
import { successAlert, errorAlert } from "../utils/alerts";
import { formatCurrency } from "../utils/strings";
import ImageDefault from "../assets/images/image-default.png";

export default function AccordionMyShoppings(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const height = isOpen ? contentRef.current.scrollHeight : 0;
    let userId = localStorage.getItem('userId')
    const idAd = props.id
    const trackings = props.etapa ? props.etapa : []

    function findDeliveredIndex() {
        let deliveredIndex = -1;
        trackings.map((item, index) => {
            if (item.status === 'DELIVERED') {
                deliveredIndex = index;
            }
            return null;
        });
        return deliveredIndex;
    };

    function findTrackings() {
        if (trackings.length === 5) {
            return <button onClick={() => confirm()}>Pedido recebido</button>
        } else if (trackings.length === 6) {
            return <ButtonDisabled disabled={true}>Pedido finalizado</ButtonDisabled>
        } else {
            return <ButtonDisabled disabled={true}>Aguardando envio</ButtonDisabled>
        }
    }

    async function confirm() {
        await axios.post(`${url}/trackings/${userId}/${idAd}`, {
            status: 'DELIVERED',
            adversiment: {
                id: idAd
            }
        }).then(() => {
            successAlert("Status atualiado com sucesso!")
        }).catch(() => {
            errorAlert("Ocorreu um erro ao atualizar o status do anúncio.")
        })
    }

    return (
        <>
            <AccordionWrapper>
                <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
                    <div>
                        <img src={props.image ? props.image : ImageDefault} alt="anuncio" />
                        <div>
                            <h1>{props.title ? props.title : ''}</h1>
                            <span>{formatCurrency(props.preco)}</span>
                        </div>
                    </div>
                    <div>
                        {findTrackings()}
                    </div>
                </AccordionHeader>
                <AccordionContent
                    style={{ height: `${height}px` }}
                    ref={contentRef}
                >
                    <div>
                        <p>Informações do pedido</p>
                        <span>Vendido por: {toUppercasedString(props.sellerName)}<br />
                            CPF: {props.cpf.substring(0, 3)}.***.***-**</span>
                        <span>{props.date}</span>
                        <span>ID do anúncio: {props.id}</span>
                    </div>
                    <ContainerCheckout>
                        <Checkout etapa={props.etapa.length + 1} />
                    </ContainerCheckout>
                </AccordionContent>
            </AccordionWrapper>
        </>
    )
}