import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import {
    Container
} from "../assets/styles/myShoppingsStyle"
import Accordion from "../components/AccordionMyShoppings";
import { useNavigate } from "react-router";
import { url } from "../utils/request";
import axios from "axios";
import Loading from "../components/Loading";
import NoContent from "../components/NoContent";

export default function MyShoppings() {
    const [shoppings, setShoppings] = useState([])
    let navigate = useNavigate()
    const userid = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false);

    async function load() {
        setLoading(true)

        await axios.get(`${url}/adversiments/boughts/${userid}`).then((response) => {
            const data = response.data
            setShoppings(data)
        })

        setLoading(false)
    }

    useEffect(() => {
        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        }

        load()
    }, [])

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='principal' />
            <Container>
                <h1>Minhas compras</h1>

                <div>
                    {shoppings && shoppings.length ?

                        shoppings.map((item) => (
                            <>
                                <Accordion
                                    key={item.id}
                                    title={item.title}
                                    preco={item.price}
                                    image={item.images[0].url}
                                    finalized={item.isActive === "DELIVERED" ? true : false}
                                    etapa={item.trackings}
                                    id={item.id}
                                    date={item.saleDate}
                                    cpf={item.user.cpf}
                                    sellerName={item.user.name}
                                />
                            </>
                        ))
                        :
                        <NoContent
                            message="Você não possui compras"
                            accessibilityMessage="Você não possui compras"
                        />
                    }
                </div>
            </Container>
        </>
    )
}