import React, { useState } from "react";
import IconCamPink from "../assets/images/icon-cam-gray.svg";
import IconError from '../assets/images/icon-error.svg';
import {
    ContainerError,
    CoupleInputs,
    ImagemSelecionadaRedonda,
    InputContainer,
    Label
} from '../assets/styles/components/InputStyle';
import {
    ButtonUpdate,
    Container,
    ContainerInputs,
    ProfileImage,
    Title
} from "../assets/styles/editProfileStyle";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";
import { containsNumbers, validateEmail, validateAge } from "../utils/strings"
import InputMask from 'react-input-mask';
import axios from "axios";

export default function EditProfile() {
    const [profileImage, setProfileImage] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [email, setEmail] = useState('');
    const [bank, setBank] = useState('');
    const [agency, setAgency] = useState('');
    const [account, setAccount] = useState('');

    const [cep, setCep] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('')
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [showNameError, setShowNameError] = useState(false);
    const [showCpfError, setShowCpfError] = useState(false);
    const [showDateOfBirthError, setShowDateOfBirthError] = useState(false)
    const [showPhoneNumberError, setShowPhoneNumberError] = useState(false)

    const [showEmailError, setShowEmailError] = useState(false);

    const [textCpfError, setTextCpfError] = useState("CPF inválido");
    const [textPhoneError, setTextPhoneError] = useState("Telefone inválido");
    const [textEmailError, setTextEmailError] = useState("E-mail inválido");

    const [disabledAdressInputs, setDisableAdressInputs] = useState(true)

    function handleChangeProfileImage(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProfileImage(reader.result);
        };
    }

    const formatBankNumber = (value) => {
        const formattedValue = value.replace(/\D/g, '');

        if (formattedValue.length > 3) {
            return `${formattedValue.slice(0, 3)}-${formattedValue.slice(3)}`;
        } else {
            return formattedValue;
        }
    };

    const formatAgencyNumber = (value) => {
        const formattedValue = value.replace(/\D/g, '');

        if (formattedValue.length > 4) {
            return `${formattedValue.slice(0, 4)}-${formattedValue.slice(4)}`;
        } else {
            return formattedValue;
        }
    };

    const formatAccountNumber = (value) => {
        const formattedValue = value.replace(/\D/g, '');

        if (formattedValue.length > 5) {
            return `${formattedValue.slice(0, 5)}-${formattedValue.slice(5)}`;
        } else {
            return formattedValue;
        }
    };

    const handleBankChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatBankNumber(inputValue);
        setBank(formattedValue);
    };

    const handleAgencyChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatAgencyNumber(inputValue);
        setAgency(formattedValue);
    };

    const handleAccountChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatAccountNumber(inputValue);
        setAccount(formattedValue);
    };

    async function buscarPorCep(cep) {
        if (cep) {
            if (cep.length === 8) {
         try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.data.erro) {
                const { logradouro, localidade, uf, bairro } = response.data;
                setCity(localidade)
                setState(uf)
                setNeighborhood(bairro)
                setRoad(logradouro)
                setDisableAdressInputs(false)
            }
        } catch (error) {
            console.log('Erro ao obter o endereço:', error);
        }   
            }
        }
    }

    function atualizar() {
        let isValidFields = validateFields()

        if (isValidFields) {
            console.log("todos os campos estão validos")
        }
    }

    function validateFields() {
        let isValidAllFields = true

        if (name.length < 2 || name.length > 50 || containsNumbers(name)) {
            isValidAllFields = false
            setShowNameError(true)
        } else {
            setShowNameError(false)
        }

        if (cpf.length !== 14) {
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

        if (phoneNumber.length !== 15) {
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

        if (phoneNumber) {
            setShowPhoneNumberError(true)
            setTextPhoneError("Telefone já cadastrado!")
        }

        if (email) {
            setTextEmailError("E-mail já cadastrado!")
        }

        if (cpf) {
            setTextCpfError("CPF já cadastrado!")
        }

        return isValidAllFields
    }

    console.log(cep, number, complement)

    return (
        <>
            <Navbar type='basic' isAuthenticated={false} showBackButton={true} />
            <Container>
                <Title>Editar perfil</Title>

                <div>
                    <Accordion
                        header="Dados cadastrais"
                        content={
                            <>
                                <ContainerInputs>
                                    <ProfileImage>
                                        {
                                            profileImage !== '' ?
                                                <div>
                                                    <ImagemSelecionadaRedonda src={profileImage} alt="imagemSelecionada" />
                                                </div>
                                                :
                                                <div>
                                                    <img src={IconCamPink} alt="Selecione uma imagem dos seus arquivos" />
                                                </div>
                                        }
                                        <label htmlFor="imagem1"></label>
                                        <input id="imagem1" type="file" onChange={handleChangeProfileImage} />
                                        <h1>Alterar foto de perfil</h1>
                                    </ProfileImage>

                                    <div>
                                        <Label>Nome</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
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
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
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
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
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
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
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
                                </ContainerInputs>
                            </>
                        }
                    />
                    <Accordion
                        header="Segurança e privacidade"
                        content={
                            <>
                                <ContainerInputs>
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
                                            <img src={IconError} alt="Digite o email corretamente" />
                                            <span>{textEmailError}</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Conta bancaria</Label>
                                        <CoupleInputs>
                                            <div>
                                                <span>Banco</span>
                                                <input
                                                    type="text"
                                                    placeholder="0000"
                                                    value={bank}
                                                    onChange={handleBankChange}
                                                />
                                            </div>
                                            <div>
                                                <span>Agência</span>
                                                <input
                                                    type="text"
                                                    placeholder="0000"
                                                    value={agency}
                                                    onChange={handleAgencyChange}
                                                />
                                            </div>
                                            <div>
                                                <span>Conta</span>
                                                <input
                                                    type="text"
                                                    placeholder="0000"
                                                    value={account}
                                                    onChange={handleAccountChange}
                                                />
                                            </div>
                                        </CoupleInputs>
                                    </div>
                                </ContainerInputs>
                            </>
                        }
                    />
                    <Accordion
                        header="Endereço"
                        content={
                            <>
                                <ContainerInputs>
                                    <div>
                                        <Label>CEP</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                            <input
                                                type="text"
                                                placeholder="Digite o CEP"
                                                onChange={(e) => setCep(e.target.value)}
                                                onBlur={(e) => buscarPorCep(e.target.value)}
                                                maxLength={8}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Estado</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                value={state}
                                                type="text"
                                                placeholder="Digite o estado"
                                                onChange={(e) => setState(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Cidade</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                value={city}
                                                type="text"
                                                placeholder="Digite a cidade"
                                                onChange={(e) => setCity(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Rua</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs} x
                                        >
                                            <input
                                                value={road}
                                                type="text"
                                                placeholder="Digite a rua"
                                                onChange={(e) => setRoad(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Bairro</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                value={neighborhood}
                                                type="text"
                                                placeholder="Digite o bairro"
                                                onChange={(e) => setNeighborhood(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Número</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                            <input
                                                type="text"
                                                placeholder="Digite o Número"
                                                onChange={(e) => setNumber(e.target.value)}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                    <div>
                                        <Label>Complemento</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                            <input
                                                type="text"
                                                placeholder="Digite o complemento"
                                                onChange={(e) => setComplement(e.target.value)}
                                            ></input>
                                        </InputContainer>
                                    </div>
                                </ContainerInputs>
                            </>
                        }
                    />
                </div>
                <ButtonUpdate onClick={() => atualizar()}>Atualizar</ButtonUpdate>
            </Container>
        </>
    )
}