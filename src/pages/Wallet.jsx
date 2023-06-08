import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContext";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import NoContent from "../components/NoContent";
import {
    Container,
    ContainerBalance,
    ContainerHistoric,
    CardWithdraw,
    CardDeposit
} from "../assets/styles/walletStyle";
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
export default function Wallet() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const id = user.id
    let navigate = useNavigate();

    const [balance, setBalance] = useState(0);
    const [showBalance, setShowBalance] = useState(false);
    const [historic, setHistoric] = useState([1]);

    function load() { }

    function withdraw() { }

    function openAdsSale() {
        navigate("/meus-anuncios?isSelected=sale")
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/")
        } else {
            load()
        }
    }, [])

    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <h1>Minhas carteira</h1>
                <div>
                    <ContainerBalance>
                        <div>
                            <p>R$ {showBalance ? balance : "••••"}</p>
                            {
                                showBalance ?
                                    <img
                                        onClick={() => showBalance ? setShowBalance(false) : setShowBalance(true)}
                                        src={EyeClose}
                                        alt="Exibir saldo"
                                    />
                                    :
                                    <img
                                        onClick={() => showBalance ? setShowBalance(false) : setShowBalance(true)}
                                        src={EyeOpen}
                                        alt="Esconder saldo"
                                    />
                            }
                        </div>
                        <button onClick={() => withdraw()}>Realizar saque</button>
                    </ContainerBalance>
                    <ContainerHistoric>
                        <p>Histórico</p>
                        <div>
                            {
                                historic.length > 0 ?
                                    historic.map((item, index) => (
                                        <>
                                            <div key={index}>
                                                <CardWithdraw>
                                                    <div>
                                                        <p>Saque</p>
                                                        <span>Conta bancária: 012210383-5</span>
                                                        <h3>Realizado em: 10/05/2024</h3>
                                                    </div>
                                                    <div>
                                                        <h1>- R$ 200</h1>
                                                    </div>
                                                </CardWithdraw>
                                                <CardDeposit>
                                                    <div>
                                                        <p>Depósito</p>
                                                        <span onClick={() => openAdsSale()}>Visualizar anúncios vendidos</span>
                                                        <h3>Realizado em: 10/05/2024</h3>
                                                    </div>
                                                    <div>
                                                        <h1>+ R$ 200</h1>
                                                    </div>
                                                </CardDeposit>
                                            </div>
                                        </>
                                    ))
                                    :
                                    <NoContent
                                        message="Você ainda não possui históricos"
                                        accessibilityMessage="Você ainda não possui históricos"
                                    />
                            }
                        </div>
                    </ContainerHistoric>
                </div>
            </Container>
        </>
    )
}