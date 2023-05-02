import React from 'react';
import { Description, Title, Container, ChangeWindow } from "../assets/styles/successfulPaymentStyle";
import Navbar from "../components/Navbar";

export default function SuccessfulPayment() {
    return (
        <>
            <Navbar type='principal'
                isAuthenticated={true} 
            />
            <div style={{
                width: '100%',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Container>
                    <Title>Compra concluída! É hora de comemorar!</Title>
                    <Description>Agora, é só aguardar a entrega do seu produto e aproveitar ao máximo. Esperamos que você se divirta muito usando o seu novo item e que ele atenda a todas as suas expectativas.</Description>
                    <Description>Para visualizar detalhes e informações do produto que acabou de adquirir você pode acessar a aba de Minhas compras no seu perfil ou clicar no botão abaixo! </Description>
                    <ChangeWindow>Ir para Minhas compras</ChangeWindow>
                </Container>
            </div>
        </>
    )
}