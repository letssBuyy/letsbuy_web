import React from "react";
import FallingAstronaut from '../assets/images/astronaut.svg';
import { Container, Image, Title, Button } from '../assets/styles/notFoundStyle';
import Navbar from '../components/Navbar';

export default function NotFound() {

    return (
        <>
            <Navbar type="basic" showBackButton={false} />
            <Container>
                <Image
                    src={FallingAstronaut}
                    alt="página não encontrada"
                />
                <Title>
                    Oh não! Página não encontrada. Mas não se preocupe, estamos aqui para <br />
                    ajudá-lo a encontrar o caminho certo.
                </Title>
                <Button>Voltar</Button>
            </Container>
        </>
    )
}