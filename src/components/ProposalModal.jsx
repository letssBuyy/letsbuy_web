import React, { useState } from "react";
import IconError from "../assets/images/icon-error.svg";
import {
    ModalWrapper,
    ModalBackdrop,
    ModalContent,
    Button,
    Title,
    BoxProposal
} from "../assets/styles/components/proposalModalStyle";
import { NumericFormat } from 'react-number-format';
import {
    ContainerError,
    InputContainer,
    Label,
} from '../assets/styles/components/InputStyle';
import Loading from "./Loading";
import axios from "axios";
import { url } from "../utils/request";
import { successAlert, errorAlert } from "../utils/alerts";

export default function ProposalModal({ isOpen, onClose, userId, advertise, idChat }) {
    const [price, setPrice] = useState('');
    const [showPriceError, setShowPriceError] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        onClose();
    };

    async function proposal() {
        if (price > 0 && price > advertise.price && userId) {
            try {
                setLoading(true)
                await axios.patch(`${url}/messages/proposal`, {
                    idChat: idChat,
                    idUser: userId,
                    amount: price
                }).then((response) => {
                    if (response.status === 200) {
                        successAlert("Proposta enviada com sucesso!")
                    } else {
                        errorAlert("Ocorreu um erro ao realizar a proposta.")
                    }
                }).catch(() => {
                    errorAlert("Ocorreu um erro ao realizar a proposta.")
                })
            } catch (error) {
                errorAlert("Ocorreu um erro ao realizar a proposta.")
            } finally {
                setLoading(false)
            }
        } else {
            setShowPriceError(true)
        }
    }

    return (
        <>
            <Loading isEnabled={loading} />
            {isOpen && (
                <ModalWrapper>
                    <ModalBackdrop onClick={closeModal} />
                    <ModalContent>
                        <Title>Fazer uma proposta</Title>
                        <BoxProposal>
                            <img src={advertise.image} alt="Anúncio para proposta"/>
                            <div>
                                <p>{advertise.title}</p>
                                <h1>R$ {advertise.price}</h1>
                            </div>
                        </BoxProposal>
                        <div>
                            <Label>Preço</Label>
                            <InputContainer>
                                <NumericFormat
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    placeholder="R$ 0,00"
                                />
                            </InputContainer>
                            <ContainerError style={showPriceError ? { display: 'flex' } : { display: 'none' }}>
                                <img src={IconError} alt="Preço inválido" />
                                <span>Digite um valor válido</span>
                            </ContainerError>
                        </div>
                        <Button onClick={() => proposal()}>Confirmar</Button>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    )
}