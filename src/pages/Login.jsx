import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import IconError from '../assets/images/icon-error.svg';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, ForgotPassword, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import Navbar from "../components/Navbar";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    let navigate = useNavigate();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function login() {
        console.log(email)
        console.log(password)
        setShowEmailError(false)
        setShowPasswordError(false)

        const token = ""
        localStorage.setItem("TOKEN", token)

        navigate("/")
    }

    return (
        <>
            <Navbar
                type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Container>
                    <Title>Entre na sua conta</Title>

                    <ContainerError style={{ justifyContent: 'center' }}>
                        <span>Email ou senha não correspondem</span>
                    </ContainerError>

                    <div>
                        <Label>Email</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="Digite o email"
                                onChange={handleEmailChange}
                            ></input>
                        </InputContainer>
                        <ContainerError
                            style={showEmailError ? { display: 'flex' } : { display: 'none' }}
                        >
                            <img src={IconError} alt="Digite o email corretamente" />
                            <span>Digite o email corretamente</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Digite a senha"
                                onChange={handlePasswordChange}
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
                            <img src={IconError} alt="Digite a senha corretamente" />
                            <span>Digite a senha corretamente</span>
                        </ContainerError>
                    </div>
                    <ForgotPassword>Esqueci a senha</ForgotPassword>
                    <SignIn onClick={() => login()}>Entrar</SignIn>
                    <SignUp>Não tem conta? Cadastre-se</SignUp>
                </Container>
            </div>

        </>
    )
}