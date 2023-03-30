import React,{ useState } from "react";
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, ForgotPassword, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { Description } from "../assets/styles/recoveryStyle";
import IconError from '../assets/images/icon-error.svg';
import Navbar from "../components/Navbar";

export default function Recovery() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function enviar(){

    }

    return (
        <>
            <Navbar type='basic'
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
                    <Title>Estamos quase lá!</Title>
                    <Description>Insira sua nova senha abaixo e clique em alterar senha</Description>
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
                    <SignIn onClick={() => enviar()}>Enviar</SignIn>
                </Container>
            </div>
        </>
    )
}