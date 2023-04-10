import React from "react";
import FallingAstronaut from '../assets/images/astronaut.svg'
import { Container, Image, Title, Button } from '../assets/styles/notFoundStyle'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    let navigate = useNavigate();

    function NavigateToHome() {
        navigate('/');
    };

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
                <Button onClick={NavigateToHome}>Voltar</Button>
            </Container>
        </>
    )
}