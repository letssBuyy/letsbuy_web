import React from "react";
import { Container, Title, P, DivAccordin, H1Accordin } from "../assets/styles/faqStyle";
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
                            header="Como eu posso efetuar o pagamento por um produto?"
                            content={<H1Accordin>"Para realizar o pagamento basta escolher o produto de sua preferência, selecionar a opção "Comprar", e em seguida confirmar as informações do produto escolhido, selecionar "Realizar pagamento", assim você será redirecionado para nossa tela de Checkout onde você terá disponível a opção de pagar com o cartão de crédito, que é feita via PagSeguro. Basta preencher as informações do cartão e concluir sua compra. Após isso uma nova tela informando que a sua compra foi concluída vai aparecer."</H1Accordin>}
                        />

                        <Accordion
                            header="Para onde vai o dinheiro da venda após comprarem o meu produto?"
                            content={<H1Accordin>"Após realizar uma venda a plataforma ficará aguardando a confirmação do recebimento do produto por parte do comprador, tendo como limite máximo o prazo de 15 dias. Se em 15 dias o comprador não confirmar o recebimento do pedido via plataforma ou não informar qualquer tipo de problema que possa ter tido no recebimento do seu pedido, o dinheiro será enviado até carteira do vendedor automaticamente, sendo descontada apenas a taxa de serviço da plataforma que é de 10%, ficando assim disponível para saque."</H1Accordin>}
                        />

                        <Accordion
                            header="Como eu realizo o saque do dinheiro após finalizar uma venda?"
                            content={<H1Accordin>"Para realizar o saque do seu dinheiro, é necessário que você tenha cadastrado uma conta bancária na nossa plataforma, para que assim você tenha essa opção liberada. Com sua conta bancária cadastrada basta acessar a opção "Minha carteira" e em seguida você será redirecionado a tela da sua carteira onde existe a opção para realizar o saque até a sua conta bancária cadastrada."</H1Accordin>}
                        />

                        <Accordion
                            header="Qual é a taxa cobrada pela plataforma em cima de cada anúncio publicado?"
                            content={<H1Accordin>"A taxa cobrada é de 10% em cima de cada anúncio vendido.
                                "</H1Accordin>}
                        />

                        <Accordion
                            header="Preciso alterar algumas informações do meu cadastro, o que faço?"
                            content={<H1Accordin>"Para alterar suas informações de cadastro basta acessar a tela do seu perfil e selecionar a opção "Editar perfi" onde você terá acesso a todos os seus dados cadastrais e todos liberados para serem editados.
                                "</H1Accordin>}
                        />

                        <Accordion
                            header="Como posso receber meu pedido?"
                            content={<H1Accordin>"
                            Existem duas opções para receber seu pedido e você seleciona a melhor para o seu caso após selecionar o produto que deseja comprar. Sendo elas a opção de se encontrar com o vendedor pessoalmente ou solicitar o envio do produto até o seu endereõ.
                            
                                "</H1Accordin>}
                        />

                        <Accordion
                            header="Como posso entrar em contato com o vendedor?"
                            content={<H1Accordin>"Disponibilizamos aos nossos clientes o contato com o vendedor por meio de um chat em tempo real ou o seu número para contato via WhatsApp.
                                "</H1Accordin>}
                        />
                    </DivAccordin>
                </Container>
            </div>
        </>
    )
}
