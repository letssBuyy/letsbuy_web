import React,{ useState } from "react";
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, ForgotPassword, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import { Description } from "../assets/styles/recoveryStyle";
import IconError from '../assets/images/icon-error.svg';
import Navbar from "../components/Navbar";

export default function Recovery() {
    const [showEmailError, setShowEmailError] = useState(false);
    const [email, setEmail] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
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
                    <Title>Não consegue acessar sua conta?</Title>
                    <Description>Insira o seu endereço de e-mail abaixo e enviaremos as instruções necessárias para redefinir a sua senha.</Description>
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
                    <SignIn onClick={() => enviar()}>Enviar</SignIn>
                </Container>
            </div>
        </>
    )
}