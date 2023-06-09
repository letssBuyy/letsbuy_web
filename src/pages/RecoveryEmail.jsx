import React, { useState } from "react";
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, SignIn, Title } from '../assets/styles/loginStyle';
import { Description } from "../assets/styles/recoveryStyle";
import IconError from '../assets/images/icon-error.svg';
import Navbar from "../components/Navbar";
import { validateEmail } from "../utils/strings"
import axios from "axios";
import { url } from "../utils/request";
import { successAlert, errorAlert } from "../utils/alerts";

export default function Recovery() {
    const [showEmailError, setShowEmailError] = useState(false);
    const [email, setEmail] = useState('');

    async function enviar() {
        if (validateEmail(email)) {
            try {
                await axios.post(`${url}/emails/trocar-senha`, {
                    "email": email
                }).then(() => {
                    successAlert("Email enviado com sucesso!")
                }).catch(() => {
                    errorAlert("Ocorreu um erro ao enviar o email.")
                })
            } catch (e) {
                errorAlert("Ocorreu um erro ao enviar o email.")
            }
        } else {
            setShowEmailError(true)
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
                    <Title>Não consegue acessar sua conta?</Title>
                    <Description>Insira o seu endereço de e-mail abaixo e enviaremos as instruções necessárias para redefinir a sua senha.</Description>
                    <div>
                        <Label>Email</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="Digite o email"
                                onChange={(event) => setEmail(event.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError
                            style={showEmailError ? { display: 'flex' } : { display: 'none' }}
                        >
                            <img src={IconError} alt="Digite o email corretamente" />
                            <span>Digite o email corretamente</span>
                        </ContainerError>
                    </div>
                    <SignIn onClick={() => enviar()}>Enviar</SignIn>
                </Container>
            </div>
        </>
    )
}