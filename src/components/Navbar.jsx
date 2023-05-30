import React, { useState } from "react";
import Logo from '../assets/images/logo-black-pink.svg';
import BackButton from '../assets/images/icon-back-button.svg';
import Menu from '../assets/images/icon-menu-black.svg';
import {
    ContainerBasic,
    LogoBasic,
    ImageBackButton,
    ContainerPrincipal,
    NavbarMobile,
    BackgroundOffCanvas,
    
    ContainerNavbarIsAuthenticated,
    ContainerMyAccount,
    ItensContainerNavbarIsAuthenticated
} from '../assets/styles/components/navbarStyle';

import MenuWhite from "../assets/images/icon-menu-white.svg"
import ArrowBack from "../assets/images/icon-arrow-back-pink.svg";
import ImageDefault from '../assets/images/image-default.png';
import Cart from "../assets/images/icon-cart-black.svg";
import Chat from "../assets/images/icon-chat-black.svg";
import Edit from "../assets/images/icon-edit-black.svg";
import Favorite from "../assets/images/icon-favorite-black.svg";
import Grid from "../assets/images/icon-grid-black.svg";
import Logout from "../assets/images/icon-log-out.svg";


export default function Navbar(props) {
    var type = props.type ? props.type : 'basic'
    var showBackButton = props.showBackButton ? props.showBackButton : false
    var isAuthenticated = props.isAuthenticated ? props.isAuthenticated : false
    var userName = localStorage.getItem("USER_NAME") ? localStorage.getItem("USER_NAME") : 'Maria'

    const [visible, setVisible] = useState(false);

    switch (type) {
        case "basic":
            return (
                <ContainerBasic>
                    {showBackButton ?
                        <ImageBackButton src={BackButton} alt="Voltar" />
                        :
                        <></>
                    }
                    <LogoBasic src={Logo} alt="LetsBuy" />
                </ContainerBasic>
            )
        case "principal":
            return (
                <>
                    <ContainerPrincipal>
                        <div>
                            <img src={Logo} alt="LetsBuy" />
                        </div>
                        <div>
                            <p>Sobre nós</p>
                            <p>Comprar</p>
                            <p>Anúnciar</p>
                            <p>Perguntas frequêntes</p>

                            {
                                isAuthenticated ?
                                    <button onClick={() => visible ? setVisible(false) : setVisible(true)}>
                                        Olá {userName}
                                        <img src={MenuWhite} alt="Abrir navegação lateral" />
                                    </button>
                                    :
                                    <button>Entrar</button>
                            }

                            <button onClick={() => visible ? setVisible(false) : setVisible(true)} className="btn-mobile">
                                <img src={Menu} alt="mais opções" />
                            </button>
                        </div>
                    </ContainerPrincipal>
                    <NavbarMobile style={visible ? { marginLeft: 0 } : { marginLeft: '-375px' }}>
                        {
                            !isAuthenticated ?
                                <>
                                    <p>Sobre nós</p>
                                    <p>Comprar</p>
                                    <p>Anúnciar</p>
                                    <p>Perguntas frequêntes</p>


                                    <button>Entrar</button>
                                </>
                                :
                                <>
                                    <ContainerNavbarIsAuthenticated>
                                        <ContainerMyAccount>
                                            <div>
                                                <img src={ImageDefault} alt="Icone de perfil" />
                                                <div>
                                                    <p>Lucas da Silva</p>
                                                    <span>Minha conta</span>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={ArrowBack} alt="Ir para minhas compras" />
                                            </div>
                                        </ContainerMyAccount>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Chat} alt="Chat" />
                                            </div>
                                            <div>
                                                <p>Chat</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Grid} alt="Meus anúncios" />
                                            </div>
                                            <div>
                                                <p>Meus anúncios</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Edit} alt="Publicar anúncios" />
                                            </div>
                                            <div>
                                                <p>Publicar anúncio</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Favorite} alt="Favoritos" />
                                            </div>
                                            <div>
                                                <p>Favoritos</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Cart} alt="Minhas compras" />
                                            </div>
                                            <div>
                                                <p>Minhas compras</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated>
                                            <div>
                                                <img src={Logout} alt="Sair" />
                                            </div>
                                            <div>
                                                <p>Sair</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                    </ContainerNavbarIsAuthenticated>
                                </>
                        }
                    </NavbarMobile>
                    <BackgroundOffCanvas onClick={() => setVisible(false)} style={visible ? { display: 'flex' } : { display: 'none' }}></BackgroundOffCanvas>
                </>
            )
        default:
            break;
    }
}