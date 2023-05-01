import React from "react";
import Woman from "../assets/images/woman.png";
import {
    Container,
    Title,
    Description,
    Background
} from "../assets/styles/components/bannerStyle"

export default function Banner() {
    return (
        <>
            <Background>
                <Container>
                    <div>
                        <img src={Woman} alt="Dê uma nova vida ao que não usa mais!" />
                    </div>
                    <div>
                        <Title>Dê uma nova vida ao que <span>não usa mais</span>!</Title>
                        <Description>Desapegue do que não precisa e encontre itens incríveis por preços acessíveis em nosso site!</Description>
                    </div>
                </Container>
            </Background>

        </>
    )
}