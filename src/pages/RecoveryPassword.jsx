import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, SignIn, Title } from '../assets/styles/loginStyle';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { Description } from "../assets/styles/recoveryStyle";
import IconError from '../assets/images/icon-error.svg';
import Navbar from "../components/Navbar";
import axios from "axios";
import { url } from "../utils/request";
import { successAlert, errorAlert } from "../utils/alerts";

export default function Recovery() {
    const { id } = useParams();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    async function enviar() {
        if (password.length >= 6 && password.length < 50) {
            try {
                await axios.patch(`${url}/users?sellerId=${id}`, {
                    "password": password
                }).then(() => {
                    successAlert("Senha atualizada com sucesso!")
                }).catch(() => {
                    errorAlert("Ocorreu um erro ao alterar a senha.")
                })
            } catch (e) {
                errorAlert("Ocorreu um erro ao alterar a senha.")
            } 
        } else {
            setShowPasswordError(true)
        }
    }

    return (
        <>
            <Navbar type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div>
                <Container>
                    <Title>Estamos quase lá!</Title>
                    <Description>Insira sua nova senha abaixo e clique em alterar senha</Description>
                    <div>
                        <Label>Senha</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Digite a senha"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            {
                                showPassword ?
                                    <img
                                        onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}
                                        src={EyeClose}
                                        alt="Exibir senha"
                                    />
                                    :
                                    <img
                                        onClick={() => showPassword ? setShowPassword(false) : setShowPassword(true)}
                                        src={EyeOpen}
                                        alt="Esconder senha"
                                    />
                            }
                        </InputContainer>
                        <ContainerError style={showPasswordError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Senha inválida (Minímo 6 digitos)" />
                            <span>Senha inválida (Minímo 6 digitos)</span>
                        </ContainerError>
                    </div>
                    <SignIn onClick={() => enviar()}>Enviar</SignIn>
                </Container>
            </div>
        </>
    )
}