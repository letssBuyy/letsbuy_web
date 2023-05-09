import React, { useState } from "react";
import {
    AccordionWrapper,
    AccordionHeader,
    AccordionContent,
    ButtonDisabled,
    ContainerCheckout
} from "../assets/styles/components/accordionStyle"
import Checkout from "./checkoutPayment";

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const height = isOpen ? contentRef.current.scrollHeight : 0;

    return (
        <>
            <AccordionWrapper>
                <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
                    <div>
                        <img src="https://i.imgur.com/fwOCAJz.png" alt="anuncio" />
                        <div>
                            <h1>Bolsa marrom</h1>
                            <p>Tommy</p>
                            <span>R$200</span>
                        </div>
                    </div>
                    <div>
                        {
                            props.finalized ?
                                <button>Pedido recebido</button>
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
                        <span>Vendido por: LUIZ ALVES RODRIGUES
                            CPF: 022-***-***-**</span>
                        <span>06/05/2023 10:00:00</span>
                        <span>ID do anúncio: 123456789</span>
                    </div>
                    <div>
                        <p>Endereço de entrega</p>
                        <span>
                            Rua Sabbado D’Angelo, 281 - 08210790 Apartamento 1007, torre B
                        </span>
                    </div>
                    <ContainerCheckout>
                        <Checkout/>
                    </ContainerCheckout>
                </AccordionContent>
            </AccordionWrapper>
        </>
    )
}