import React, { useState } from "react";
import { Container, Title, P } from "../assets/styles/AboutUsStyle";
import Navbar from "../components/Navbar";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


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

                </Container>
                    <Accordion allowMultiple>
                        <AccordionItem header="Como posso anunciar um produto na plataforma?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </AccordionItem>

                        <AccordionItem header="Quanto tempo meu anúncio fica disponível na plataforma?">
                            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                            vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                            vitae, accumsan auctor mi.
                        </AccordionItem>

                        <AccordionItem header="Como posso editar ou excluir meu anúncio?">
                            Suspendisse massa risus, pretium id interdum in, dictum sit amet
                            ante. Fusce vulputate purus sed tempus feugiat.
                        </AccordionItem>

                        <AccordionItem header="É possível negociar o preço do produto com o comprador?">
                            Suspendisse massa risus, pretium id interdum in, dictum sit amet
                            ante. Fusce vulputate purus sed tempus feugiat.
                        </AccordionItem>
                    </Accordion>
            </div>
        </>
    )
}