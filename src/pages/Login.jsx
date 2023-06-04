import React, { useState, useContext } from "react";
import IconError from '../assets/images/icon-error.svg';
import { useNavigate } from 'react-router-dom';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, ForgotPassword, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import Navbar from "../components/Navbar";
import { validateEmail } from "../utils/strings";
import { AuthContext } from '../utils/AuthContext';
import Loading from "../components/Loading";
import { toastSucess } from "../utils/alerts";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showLoginError, setShowLoginError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { authlogin } = useContext(AuthContext);
    let navigate = useNavigate();

    async function login() {
        if (validateFields()) {
            setLoading(true);
            try {
                let response = await authlogin({ email, password })
                if (response === 200) {
                    toastSucess("Entrada realizada com sucesso!");
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                } else {
                    setShowLoginError(true)
                }
            } catch (error) {
                setShowLoginError(true)
            } finally {
                setLoading(false);
            }
        }
    }

    function validateFields() {
        let isValidAllFields = true

        if (!validateEmail(email)) {
            isValidAllFields = false
            setShowEmailError(true)
        } else {
            setShowEmailError(false)
        }

        if (password.length < 6 || password.length > 50) {
            isValidAllFields = false
            setShowPasswordError(true)
        } else {
            setShowPasswordError(false)
        }

        return isValidAllFields
    }

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='basic' showBackButton={true} />
            <div>
                <Container>
                    <Title>Entre na sua conta</Title>

                    <ContainerError style={{ justifyContent: 'center' }}>
                        <span style={showLoginError ? { display: 'flex' } : { display: 'none' }}>Email ou senha não correspondem</span>
                    </ContainerError>

                    <div>
                        <Label>Email</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="Digite o email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError
                            style={showEmailError ? { display: 'flex' } : { display: 'none' }}
                        >
                            <img src={IconError} alt="Digite um e-mail válido" />
                            <span>Digite um e-mail válido</span>
                        </ContainerError>
                    </div>
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
                            <img src={IconError} alt="Preencha a senha" />
                            <span>Preencha a senha</span>
                        </ContainerError>
                    </div>
                    <ForgotPassword onClick={() => navigate("/recuperar-senha")}>Esqueci a senha</ForgotPassword>
                    <SignIn onClick={() => login()}>Entrar</SignIn>
                    <SignUp onClick={() => navigate("/cadastrar")}>Não tem conta? Cadastre-se</SignUp>
                </Container>
            </div>
        </>
    )
}