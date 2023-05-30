import React from "react";
import { Container, Title, P, DivAccordin ,H1Accordin} from "../assets/styles/FacStyle";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";


export default function Exibir() {

    return (
        <>
            <Navbar type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div>
                <Container>
                    <div>
                        <Title>Olá! Bem-vindo(a) à nossa página de Perguntas Frequentes (FAQ)!</Title>
                        <P>Sabemos que pode ser um pouco confuso encontrar todas as informações que você precisa sobre a nossa plataforma, por isso criamos essa página para ajudá-lo(a) a encontrar as respostas que procura. A página de FAQ é um lugar onde você pode obter informações úteis e práticas, além de solucionar suas dúvidas e problemas comuns. Nós queremos garantir que você tenha uma experiência incrível na nossa plataforma e estamos sempre à disposição para ajudá-lo(a).</P>
                    </div>

                    <DivAccordin>

                        <Accordion
                            header="Como posso anunciar um produto na plataforma?"
                            content={<H1Accordin>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</H1Accordin>}
                        />

                        <Accordion
                            header="Quanto tempo meu anúncio fica disponível na plataforma?"
                            content={<H1Accordin>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</H1Accordin>}
                        />

                        <Accordion
                            header="Como posso editar ou excluir meu anúncio?"
                            content={<H1Accordin>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</H1Accordin>}
                        />

                        <Accordion
                            header="É possível negociar o preço do produto com o comprador?"
                            content={<H1Accordin>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</H1Accordin>}
                        />
                    </DivAccordin>
                </Container>
            </div>
        </>
    )
}
