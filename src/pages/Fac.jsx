import React, { useState } from "react";
import { Container, Title, P } from "../assets/styles/AboutUsStyle";
import Navbar from "../components/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Exibir() {

    // function handlePasswordChange(event) {
    //     setPassword(event.target.value);
    // }

    return (
        <>
            <Navbar type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Container>
                    <div>
                        <Title>Olá! Bem-vindo(a) à nossa página de Perguntas Frequentes (FAQ)!</Title>
                        <P>Sabemos que pode ser um pouco confuso encontrar todas as informações que você precisa sobre a nossa plataforma, por isso criamos essa página para ajudá-lo(a) a encontrar as respostas que procura. A página de FAQ é um lugar onde você pode obter informações úteis e práticas, além de solucionar suas dúvidas e problemas comuns. Nós queremos garantir que você tenha uma experiência incrível na nossa plataforma e estamos sempre à disposição para ajudá-lo(a).</P>
                    </div>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                </Container>
            </div>
        </>
    )
}