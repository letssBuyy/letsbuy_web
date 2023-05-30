import React, { useState } from "react";
import {
    AccordionWrapper,
    AccordionHeader,
    AccordionContent,
    ButtonDisabled,
    ContainerCheckout
} from "../assets/styles/components/accordionShoppingStyle"
import Checkout from "./checkoutPayment";
import { toUppercasedString } from "../utils/strings"

export default function AccordionMyShoppings(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const height = isOpen ? contentRef.current.scrollHeight : 0;

    function confirm() {
        alert("confirmou")
    }

    return (
        <>
            <AccordionWrapper>
                <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
                    <div>
                        <img src={props.image} alt="anuncio" />
                        <div>
                            <h1>{props.title}</h1>
                            <span>{props.preco}</span>
                        </div>
                    </div>
                    <div>
                        {
                            props.finalized ?
                                <button onClick={() => confirm()}>Pedido recebido</button>
                                :
                                <ButtonDisabled disabled={true}>Pedido finalizado</ButtonDisabled>
                        }
                    </div>
                </AccordionHeader>
                <AccordionContent
                    style={{ height: `${height}px` }}
                    ref={contentRef}
                >
                    <div>
                        <p>Informações do pedido</p>
                        <span>Vendido por: {toUppercasedString(props.sellerName)}
                            CPF: {props.cpf.substring(0, 3)}.***.***-**</span>
                        <span>{props.date}</span>
                        <span>ID do anúncio: {props.id}</span>
                    </div>
                    <div>
                        <p>Endereço de entrega</p>
                        <span>{props.adress}</span>
                    </div>
                    <ContainerCheckout>
                        <Checkout etapa={2} />
                    </ContainerCheckout>
                </AccordionContent>
            </AccordionWrapper>
        </>
    )
}