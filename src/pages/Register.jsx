import React, { useState } from "react";
import IconError from '../assets/images/icon-error.svg';
import EyeClose from '../assets/images/icon-eye-close.svg';
import EyeOpen from '../assets/images/icon-eye-open.svg';
import { ContainerError, InputContainer, Label } from '../assets/styles/components/InputStyle';
import { Container, SignIn, SignUp, Title } from '../assets/styles/loginStyle';
import { Checkbox, ContainerCheckbox } from '../assets/styles/registerStyle';
import Navbar from "../components/Navbar";

import { containsNumbers, validateEmail, validateAge } from "../utils/strings"
import InputMask from 'react-input-mask';

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

    const [textCpfError, setTextCpfError] = useState("CPF inválido");
    const [textPhoneError, setTextPhoneError] = useState("Telefone inválido");
    const [textEmailError, setTextEmailError] = useState("E-mail inválido");

    function cadastrar() {
        let isValidFields = validateFields()

        if (isValidFields) {
            console.log("todos os campos estão validos")
        }
    }

    function haveAccount() {
        console.log('ja tenho conta')
    }

    function validateFields() {
        let isValidAllFields = true

        if (name.length < 2 || name.length > 50 || containsNumbers(name)) {
            isValidAllFields = false
            setShowNameError(true)
        } else {
            setShowNameError(false)
        }

        if (cpf.length != 14) {
            isValidAllFields = false
            setShowCpfError(true)
        } else {
            setShowCpfError(false)
        }

        if (!validateAge(dateOfBirth)) {
            isValidAllFields = false
            setShowDateOfBirthError(true)
        } else {
            setShowDateOfBirthError(false)
        }

        if (phoneNumber.length != 15) {
            isValidAllFields = false
            setShowPhoneNumberError(true)
        } else {
            setShowPhoneNumberError(false)
        }

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

        if (!terms) {
            isValidAllFields = false
            setShowTermsError(true)
        } else {
            setShowTermsError(false)
        }

        if (phoneNumber) {
            setTextPhoneError("Celular já cadastrado!")
        }

        if (email) {
            setTextEmailError("E-mail já cadastrado!")
        }

        if (cpf) {
            setTextCpfError("CPF já cadastrado!")
        }

        return isValidAllFields
    }

    return (
        <>
            <Navbar
                type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <div>
                <Container>
                    <Title>Crie sua conta</Title>

                    <div>
                        <Label>Nome</Label>
                        <InputContainer>
                            <input
                                type="text"
                                placeholder="Digite o nome"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showNameError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o nome corretamente" />
                            <span>Nome inválido (Precisa ter no mínimo 2 caracteres)</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>CPF</Label>
                        <InputContainer>
                            <InputMask
                                mask="999.999.999-99"
                                placeholder="000.000.000-00"
                                onChange={(e) => setCpf(e.target.value)}
                            ></InputMask>
                        </InputContainer>
                        <ContainerError style={showCpfError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o CPF corretamente" />
                            <span>{textCpfError}</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Data de nascimento</Label>
                        <InputContainer>
                            <input
                                type="date"
                                placeholder="00/00/0000"
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showDateOfBirthError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite a data de nascimento corretamente" />
                            <span>Data de nascimento inválida (Usuário precisa ter no minímo 18 anos)</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Número de celular</Label>
                        <InputContainer>
                            <InputMask
                                mask="(99) 99999-9999"
                                placeholder="(00) 00000-0000"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </InputContainer>
                        <ContainerError style={showPhoneNumberError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite telefone corretamente" />
                            <span>{textPhoneError}</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Email</Label>
                        <InputContainer>
                            <input
                                type="text"
                                placeholder="Digite o email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError
                            style={showEmailError ? { display: 'flex' } : { display: 'none' }}
                        >
                            <img src={IconError} alt="Digite o email corretamente" />
                            <span>{textEmailError}</span>
                        </ContainerError>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <InputContainer>
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
                            <img src={IconError} alt="Digite a senha corretamente" />
                            <span>senha inválida (Minímo 6 digitos)</span>
                        </ContainerError>
                    </div>
                    <ContainerCheckbox>
                        <Checkbox
                            type="checkbox"
                            checked={terms}
                            onChange={() => setTerms(!terms)}
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
                    <SignUp onClick={() => haveAccount()}>Já tenho conta</SignUp>
                </Container>
            </div>
        </>
    )
}