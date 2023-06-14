import React from "react";
import ImageAboutUs from '../assets/images/AboutUs.svg';
import { Container, Title, P, Image } from "../assets/styles/aboutUsStyle";
import Navbar from "../components/Navbar";

export default function AboutUs() {
    return (
        <>
            <Navbar type='basic'
                showBackButton={true}
            />
            <div>
                <Container>
                    <div>
                        <div>
                            <Title>Sobre nós?</Title>
                            <P>A LetsBuy é uma plataforma de anúncios de produtos usados que foi
                                criada pensando em tornar o processo de compra e venda mais fácil e acessível para todos. Sabemos que muitas pessoas têm produtos que não usam mais e que podem ser úteis para outras pessoas, e é por isso que criamos uma plataforma que possibilita que esses produtos sejam vendidos de forma simples e segura.
                            </P>

                            <P>Nosso objetivo é proporcionar uma experiência de compra e venda descomplicada, sem burocracia e sem estresse.
                                Acreditamos que é possível fazer negócios de forma justa e transparente, e é isso que nos motiva todos os dias.</P>
                        </div>

                        <div>
                            <Title>Missão</Title>
                            <P>Tornar o processo de compra e venda de produtos usados mais fácil  e seguro para todos.</P>
                        </div>

                        <div>
                            <Title>Visão</Title>
                            <P>Nos tornarmos a plataforma líder em anúncios de produtos usados, oferecendo uma experiência excepcional para nossos clientes.</P>
                        </div>

                        <div>
                            <Title>Valores</Title>
                            <P>transparência, a confiança e a sustentabilidade. Acreditamos em fazer negócios de forma justa e transparente, mantendo a confiança dos nossos usuários</P>
                        </div>
                    </div>
                    <Image>
                        <img src={ImageAboutUs} alt="Sobre nós" />
                    </Image>
                </Container>
            </div>
        </>
    )
}