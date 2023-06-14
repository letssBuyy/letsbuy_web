import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContext";
import Logo from '../assets/images/logo-black-pink.svg';
import BackButton from '../assets/images/icon-back-button.svg';
import Menu from '../assets/images/icon-menu-black.svg';
import MenuWhite from "../assets/images/icon-menu-white.svg"
import ArrowBack from "../assets/images/icon-arrow-back-pink.svg";
import ImageDefault from '../assets/images/image-default.png';
import Cart from "../assets/images/icon-cart-black.svg";
import Chat from "../assets/images/icon-chat-black.svg";
import Edit from "../assets/images/icon-edit-black.svg";
import Favorite from "../assets/images/icon-favorite-black.svg";
import Grid from "../assets/images/icon-grid-black.svg";
import Money from "../assets/images/icon-money.svg";
import iconLogout from "../assets/images/icon-log-out.svg";
import { useNavigate } from 'react-router-dom';
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
import IconAdmin from "../assets/images/icon-admin.svg";

export default function Navbar(props) {
    var type = props.type ? props.type : 'basic'
    var showBackButton = props.showBackButton ? props.showBackButton : false

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const [userImageProfile, setUserImageProfile] = useState('');
    const { authlogout } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const accesLevel = localStorage.getItem('accessLevel')

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('name') !== undefined &&
            localStorage.getItem('name') !== null &&
            localStorage.getItem('name') !== undefined &&
            localStorage.getItem('name') !== null) {
            setIsAuthenticated(true)
            setUserName(localStorage.getItem('name'))
            setUserImageProfile(localStorage.getItem('profileImage'))
        }
    }, [])

    switch (type) {
        case "basic":
            return (
                <ContainerBasic>
                    {showBackButton ?
                        <ImageBackButton
                            src={BackButton}
                            alt="Voltar"
                            onClick={() => navigate(-1)}
                        />
                        :
                        <></>
                    }
                    <LogoBasic
                        src={Logo}
                        alt="LetsBuy"
                        onClick={() => navigate("/")}
                    />
                </ContainerBasic>
            )
        case "principal":
            return (
                <>
                    <ContainerPrincipal>
                        <div>
                            <img
                                src={Logo}
                                alt="LetsBuy"
                                onClick={() => navigate("/")}
                            />
                        </div>
                        <div>
                            <p onClick={() => navigate("/sobre-nos")}>Sobre nós</p>
                            <p onClick={() => navigate("/buscar-anuncios")}>Comprar</p>
                            <p onClick={() => navigate("/publicar-anuncio")}>Anúnciar</p>
                            <p onClick={() => navigate("/perguntas-frequentes")}>Perguntas frequêntes</p>

                            {
                                isAuthenticated ?
                                    <button onClick={() => visible ? setVisible(false) : setVisible(true)}>
                                        Olá {userName}
                                        <img src={MenuWhite} alt="Abrir navegação lateral" />
                                    </button>
                                    :
                                    <button onClick={() => navigate("/entrar")}>Entrar</button>
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
                                    <p onClick={() => navigate("/sobre-nos")}>Sobre nós</p>
                                    <p onClick={() => navigate("/buscar-anuncios")}>Comprar</p>
                                    <p onClick={() => navigate("/publicar-anuncio")}>Anúnciar</p>
                                    <p onClick={() => navigate("/perguntas-frequentes")}>Perguntas frequêntes</p>
                                    <button onClick={() => navigate("/entrar")}>Entrar</button>
                                </>
                                :
                                <>
                                    <ContainerNavbarIsAuthenticated>
                                        <ContainerMyAccount onClick={() => navigate("/editar-perfil")}>
                                            <div>
                                                <img
                                                    src={userImageProfile !== null &&
                                                        userImageProfile !== undefined &&
                                                        userImageProfile !== 'null' ? userImageProfile : ImageDefault}
                                                    alt="Icone de perfil"
                                                />
                                                <div>
                                                    <p>{userName}</p>
                                                    <span>Minha conta</span>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={ArrowBack} alt="Ir para minhas compras" />
                                            </div>
                                        </ContainerMyAccount>
                                        {
                                            accesLevel && accesLevel === "ADMIN" ?
                                                <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/dashboard")}>
                                                    <div>
                                                        <img src={IconAdmin} alt="Dashboard" />
                                                    </div>
                                                    <div>
                                                        <p>Dashboard</p>
                                                    </div>
                                                </ItensContainerNavbarIsAuthenticated>
                                                :
                                                <></>
                                        }
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/chat")}>
                                            <div>
                                                <img src={Chat} alt="Chat" />
                                            </div>
                                            <div>
                                                <p>Chat</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/meus-anuncios")}>
                                            <div>
                                                <img src={Grid} alt="Meus anúncios" />
                                            </div>
                                            <div>
                                                <p>Meus anúncios</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/publicar-anuncio")}>
                                            <div>
                                                <img src={Edit} alt="Publicar anúncios" />
                                            </div>
                                            <div>
                                                <p>Publicar anúncio</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/favoritos")}>
                                            <div>
                                                <img src={Favorite} alt="Favoritos" />
                                            </div>
                                            <div>
                                                <p>Favoritos</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/minhas-compras")}>
                                            <div>
                                                <img src={Cart} alt="Minhas compras" />
                                            </div>
                                            <div>
                                                <p>Minhas compras</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => navigate("/minha-carteira")}>
                                            <div>
                                                <img src={Money} alt="Minha carteira" />
                                            </div>
                                            <div>
                                                <p>Minha carteira</p>
                                            </div>
                                        </ItensContainerNavbarIsAuthenticated>
                                        <ItensContainerNavbarIsAuthenticated onClick={() => authlogout()}>
                                            <div>
                                                <img src={iconLogout} alt="Sair" />
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