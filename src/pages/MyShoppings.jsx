import React, { useState } from "react";
import Navbar from "../components/Navbar"
import {
    Container
} from "../assets/styles/MyShoppingsStyle"
import Accordion from "../components/Accordion";

export default function MyShoppings() {
    const [shoppings, setShoppings] = useState([1, 2, 3, 4, 5])
    
    return (
        <>
            <Navbar type='basic' showBackButton={true} />
            <Container>
                <h1>Minhas compras</h1>

                <div>
                    {shoppings.map(() => (
                        <>
                            <Accordion />
                        </>
                    ))
                    }
                </div>
            </Container>
        </>
    )
}