import React, { useState } from "react";
import Logo from '../assets/images/logo-black-pink.svg'
import BackButton from '../assets/images/icon-back-button.svg'
import User from '../assets/images/icon-user.svg'
import Menu from '../assets/images/icon-menu-black.svg'
import {
    ContainerBasic,
    LogoBasic,
    ImageBackButton,
    ContainerPrincipal,
    NavbarMobile,
    BackgroundOffCanvas
} from '../assets/styles/components/navbarStyle'
// import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    var type = props.type ? props.type : 'basic'
    var showBackButton = props.showBackButton ? props.showBackButton : false
    var isAuthenticated = props.isAuthenticated ? props.isAuthenticated : false
    var userName = localStorage.getItem("USER_NAME") ? localStorage.getItem("USER_NAME") : 'Usuário'
    // let navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    // function Navigate(to) {
    //     navigate(to);
    // };

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
                                    <button>
                                        Olá {userName}
                                        <img src={User} alt="Ir para a dashboard" />
                                    </button>
                                    :
                                    <button>Entrar</button>
                            }

                            <button onClick={() => visible ? setVisible(false) : setVisible(true)} className="btn-mobile">
                                <img src={Menu} alt="mais opções" />
                            </button>
                        </div>
                    </ContainerPrincipal>
                    <NavbarMobile style={visible ? {marginLeft: 0} : {marginLeft: '-375px'}}>
                        <p>Sobre nós</p>
                        <p>Comprar</p>
                        <p>Anúnciar</p>
                        <p>Perguntas frequêntes</p>

                        {
                            isAuthenticated ?
                                <button>
                                    Olá {userName}
                                    <img src={User} alt="Ir para a dashboard" />
                                </button>
                                :
                                <button>Entrar</button>
                        }
                    </NavbarMobile>
                    <BackgroundOffCanvas onClick={() => setVisible(false)}style={visible ? {display: 'flex'} : {display: 'none'}}></BackgroundOffCanvas>
                </>
            )
        default:
            break;
    }
}