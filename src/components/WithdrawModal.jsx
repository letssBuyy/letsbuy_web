import React, { useState } from "react";
import IconError from "../assets/images/icon-error.svg";
import {
    ModalWrapper,
    ModalBackdrop,
    ModalContent,
    Button,
    Title
} from "../assets/styles/components/withdrawModalStyle";
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
import { removeCurrencyFormatting } from "../utils/strings";

export default function WithdrawModal({ isOpen, onClose, balance, userId }) {
    const [price, setPrice] = useState('');
    const [showPriceError, setShowPriceError] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        onClose();
    };

    async function withdraw() {
        if (removeCurrencyFormatting(price) > 0 && balance > removeCurrencyFormatting(price) && userId) {
            try {
                setLoading(true)
                await axios.patch(`${url}/users/transaction`, {
                    userId: userId,
                    amount: removeCurrencyFormatting(price),
                    transactionType: "WITHDRAW"
                }).then((response) => {
                    if (response.status === 200) {
                        successAlert("Saque realizado com sucesso!")
                    } else {
                        errorAlert("Ocorreu um erro ao realizar o saque.")
                    }
                }).catch(() => {
                    errorAlert("Ocorreu um erro ao realizar o saque.")
                })
            } catch (error) {
                errorAlert("Ocorreu um erro ao realizar o saque.")
            } finally {
                setLoading(false)
                closeModal()
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
                        <Title>Digite o valor que deseja sacar</Title>
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
                        <Button onClick={() => withdraw()}>Sacar</Button>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    )
}