import React from "react";
import Logo from "../assets/images/logo-black-pink.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import {
    Container,
    BaseFooter,
    SpeedLinks,
    Presentation
} from "../assets/styles/components/footerStyle";
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    let navigate = useNavigate();

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
                            <li onClick={() => navigate(`/buscar-anuncios?category=FASHION_ACESSORIES`)}>Moda e acessórios</li>
                            <li onClick={() => navigate(`/buscar-anuncios?category=ELECTRONICS`)}>Eletrônicos</li>
                            <li onClick={() => navigate(`/buscar-anuncios?category=HOUSE_DECORATION`)}>Casa e decoração</li>
                        </ul>
                    </div>
                    <div>
                        <span>Links rápidos</span>
                        <ul>
                            <li onClick={() => navigate("/entrar")}>Login</li>
                            <li onClick={() => navigate("/minhas-compras")}>Minhas compras</li>
                            <li onClick={() => navigate("/buscar-anuncios")}>Buscar anúncios</li>
                        </ul>
                    </div>
                    <div>
                        <span>Utilidades</span>
                        <ul>
                            <li onClick={() => navigate("/perguntas-frequentes")}>Como comprar</li>
                            <li onClick={() => navigate("/perguntas-frequentes")}>Como vender</li>
                            <li onClick={() => navigate("/perguntas-frequentes")}>Tarifas</li>
                        </ul>
                    </div>
                    <div>
                        <span>Suporte</span>
                        <ul>
                            <li>letsBuy@suporte.com</li>
                            <li onClick={() => navigate("/perguntas-frequentes")}>Termos e condições</li>
                            <li onClick={() => navigate("/perguntas-frequentes")}>Politica de privacidade</li>
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