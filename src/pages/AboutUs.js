import React, { useState } from "react";
import ImageAboutUs from '../assets/images/AboutUs.svg'
import { Container, Title, P, Image} from "../assets/styles/AboutUsStyle";
import Navbar from "../components/Navbar";

export default function toLoad() {

    function enviar() {

    }

    return (
        <>
            <Navbar type='principal'
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
                    <div style={{
                        width: '90vw',
                        height: '100vh',
                        //border: 'yellow 2px solid',
                        padding: '20px',
                        display: 'flex',
                    }}>
                        <div style={{
                            width: '48.5%',
                            height: '99%',
                            //border: 'green 1px solid',
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent:'space-between'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '35%',
                                //border: 'blue 1px solid',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent:'space-between'
                            }}>
                            <Title>Sobre nós?</Title>
                            <P>A LetsBuy é uma plataforma de anúncios de produtos usados que foi
                                 criada pensando em tornar o processo de compra e venda mais fácil e acessível para todos. Sabemos que muitas pessoas têm produtos que não usam mais e que podem ser úteis para outras pessoas, e é por isso que criamos uma plataforma que possibilita que esses produtos sejam vendidos de forma simples e segura.
                            </P>

                            <div style={{
                                width: '100%',
                                //border: 'pink 1px solid'
                            }}>
                            <P>Nosso objetivo é proporcionar uma experiência de compra e venda descomplicada, sem burocracia e sem estresse.
                                 Acreditamos que é possível fazer negócios de forma justa e transparente, e é isso que nos motiva todos os dias.</P>
                        </div>
                            </div>
                            <div style={{
                            width: '100%',
                            //border: 'black 1px solid'
                        }}>
                            <Title>Missão</Title>
                            <P>Tornar o processo de compra e venda de produtos usados mais fácil  e seguro para todos.</P>
                        </div>
                        <div style={{
                            width: '100%',
                            //border: 'black 1px solid'
                        }}>
                            <Title>Visão</Title>
                            <P>Nos tornarmos a plataforma líder em anúncios de produtos usados, oferecendo uma experiência excepcional para nossos clientes.</P>
                        </div>
                        <div style={{
                            width: '100%',
                            //border: 'black 1px solid'
                        }}>
                            <Title>Valores</Title>
                            <P>transparência, a confiança e a sustentabilidade. Acreditamos em fazer negócios de forma justa e transparente, mantendo a confiança dos nossos usuários</P>
                        </div>
                        </div>
                        
                        <div style={{
                            width: '45%',
                            height: '55%',
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'center'
                            //border: 'black 1px solid'
                        }}>
                             <Image
                    src={ImageAboutUs}
                    alt="imagem de nao encontrado"
                />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}