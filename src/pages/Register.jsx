import React, { useState } from "react";
import IconError from '../assets/images/icon-error.svg';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import { Checkbox, ContainerCheckbox } from '../assets/styles/registerStyle';
import Navbar from "../components/Navbar";

export default function Register() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const [showNameError, setShowNameError] = useState(false);
    const [showCpfError, setShowCpfError] = useState(false);
    const [showDateOfBirthError, setShowDateOfBirthError] = useState(false);
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showTermsError, setShowTermsError] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCpfChange(event) {
        setCpf(event.target.value);
    }

    function handleDateOfBirthChange(event) {
        setDateOfBirth(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleChangeTerms = () => {
        setTerms(!terms);
    };

    function cadastrar() {
        console.log(name)
        console.log(cpf)
        console.log(dateOfBirth)
        console.log(phoneNumber)
        console.log(email)
        console.log(password)

        setShowNameError(false)
        setShowCpfError(false)
        setShowDateOfBirthError(false)
        setShowPhoneNumberError(false)
        setShowEmailError(false)
        setShowPasswordError(false)
        setShowTermsError(false)
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
                justifyContent: 'center',
                marginBottom: '30px'
            }}>
                <Container>
                    <Title>Crie sua conta</Title>

                    <div>
                        <Label>Nome</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="Digite o nome"
                                onChange={handleNameChange}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showNameError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o nome corretamente" />
                            <span>Digite o nome corretamente</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>CPF</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                onChange={handleCpfChange}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showCpfError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o CPF corretamente" />
                            <span>Digite o CPF corretamente</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Data de nascimento</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="00/00/0000"
                                onChange={handleDateOfBirthChange}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showDateOfBirthError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite a data de nascimento corretamente" />
                            <span>Digite a data de nascimento corretamente</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Número de celular</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="(00) 0 0000-0000"
                                onChange={handlePhoneNumberChange}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showPhoneNumberError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite telefone corretamente" />
                            <span>Digite telefone corretamente</span>
                        </ContainerError>
                    </div>
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
                    <ContainerCheckbox>
                        <Checkbox
                            type="checkbox"
                            checked={terms}
                            onChange={handleChangeTerms}
                        />
                        <p>Estou de acordo com os <span>termos de serviço</span> e a <span>política de privacidade</span></p>
                    </ContainerCheckbox>
                    <ContainerError
                            style={showTermsError ? { display: 'flex', margin: 0 } : { display: 'none', margin: 0 }}
                        >
                            <img src={IconError} alt="Aceite os termos de serviço" />
                            <span>Aceite os termos de serviço</span>
                        </ContainerError>
                    <SignIn onClick={() => cadastrar()}>Cadastrar</SignIn>
                    <SignUp>Já tenho conta</SignUp>
                </Container>
            </div>
        </>
    )
}