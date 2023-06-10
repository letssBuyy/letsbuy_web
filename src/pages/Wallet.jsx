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
import { url } from "../utils/request";
import axios from "axios";
import moment from "moment";
import WithdrawModal from "../components/WithdrawModal";

export default function Wallet() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const id = user.id
    let navigate = useNavigate();

    const [balance, setBalance] = useState(0);
    const [showBalance, setShowBalance] = useState(false);
    const [historic, setHistoric] = useState([1]);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    async function load() {
        await axios.get(`${url}/users/transaction?idUser=${id}`).then((response) => {
            const data = response.data
            setBalance(data.balance)
            setHistoric(data.transactions)
        })
    }

    function withdraw() {
        openModal()
    }

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
            <WithdrawModal
                isOpen={modalOpen}
                onClose={closeModal}
                balance={balance}
            />
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
                                        item.transactionType === "DEPOSIT" ?
                                            <div key={index}>
                                                <CardDeposit>
                                                    <div>
                                                        <p>Depósito</p>
                                                        <span onClick={() => openAdsSale()}>Visualizar anúncios vendidos</span>
                                                        <h3>Realizado em: {moment(item.createdAt).format("DD/MM/YYYY")}</h3>
                                                    </div>
                                                    <div>
                                                        <h1>+ R$ {item.amount}</h1>
                                                    </div>
                                                </CardDeposit>
                                            </div>
                                            :
                                            <div key={index}>
                                                <CardWithdraw>
                                                    <div>
                                                        <p>Saque</p>
                                                        <span>Conta bancária: 012210383-5</span>
                                                        <h3>Realizado em: {moment(item.createdAt).format("DD/MM/YYYY")}</h3>
                                                    </div>
                                                    <div>
                                                        <h1>- {item.amount}</h1>
                                                    </div>
                                                </CardWithdraw>
                                            </div>

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