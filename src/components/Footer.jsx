import React from "react";
import Logo from "../assets/images/logo-black-pink.svg"
import Instagram from "../assets/images/icon-instagram.svg"
import Facebook from "../assets/images/icon-facebook.svg"
import Twitter from "../assets/images/icon-twitter.svg"
import {
    Container,
    BaseFooter,
    SpeedLinks,
    Presentation
} from "../assets/styles/components/footerStyle"

export default function Footer() {
    return (
        <>
            <Container>
                <Presentation>
                    <img src={Logo} alt="LetsBuy" />
                    <span>Desapegar nunca foi tão <span>fácil!</span></span>
                    <div>
                        <span>Siga nos</span>
                        <div>
                            <img src={Instagram} alt="siga nos no instagram" />
                            <img src={Facebook} alt="siga nos no facebook" />
                            <img src={Twitter} alt="siga nos no twitter" />
                        </div>
                    </div>
                </Presentation>
                <SpeedLinks>
                    <div>
                        <span>Categorias</span>
                        <ul>
                            <li>Moda e acessórios</li>
                            <li>Eletrônicos</li>
                            <li>Casa e decoração</li>
                        </ul>
                    </div>
                    <div>
                        <span>Links rápidos</span>
                        <ul>
                            <li>Login</li>
                            <li>Minha conta</li>
                            <li>Buscar anúncios</li>
                        </ul>
                    </div>
                    <div>
                        <span>Utilidades</span>
                        <ul>
                            <li>Como comprar</li>
                            <li>Como vender</li>
                            <li>Tarifas</li>
                        </ul>
                    </div>
                    <div>
                        <span>Suporte</span>
                        <ul>
                            <li>letsBuy@suporte.com</li>
                            <li>Termos e condições</li>
                            <li>Politica de privacidade</li>
                        </ul>
                    </div>
                </SpeedLinks>
            </Container>
            <BaseFooter>
                <span>LetsBuy - © Todos os direitos reservados 2023</span>
            </BaseFooter>
        </>
    )
}