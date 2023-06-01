import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import {
    Container
} from "../assets/styles/MyShoppingsStyle"
import Accordion from "../components/AccordionMyShoppings";
import Helpdesk from "../components/helpdesk";

export default function MyShoppings() {
    const [shoppings, setShoppings] = useState([])

    useEffect(() => {
        setShoppings([1,2,3,4,5])
    },[])

    return (
        <>
            <Helpdesk />
            <Navbar type='basic' showBackButton={true} />
            <Container>
                <h1>Minhas compras</h1>

                <div>
                    {shoppings.map(() => (
                        <>
                            <Accordion
                                title="Bolsa marrom"
                                preco="R$200"
                                image="https://i.imgur.com/fwOCAJz.png"
                                finalized={true}
                                adress="Rua Sabbado D’Angelo, 281 - 08210790 Apartamento 1007, torre B"
                                etapa={2}
                                id="123456789"
                                date="06/05/2023 10:00:00"
                                cpf="523.552.718-60"
                                sellerName="Luiz Alves Rodrigues Lopes"
                            />
                        </>
                    ))
                    }
                </div>
            </Container>
        </>
    )
}