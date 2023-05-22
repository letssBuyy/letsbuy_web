import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import IconError from '../assets/images/icon-error.svg';
import IconCamPink from "../assets/images/icon-cam-gray.svg";
import axios from "axios";
import {
    Container,
    Title,
    ContainerInputs,
    ProfileImage,
    ButtonUpdate
} from "../assets/styles/editProfileStyle";
import {
    ContainerError,
    InputContainer,
    Label,
    ImagemSelecionada,
    CoupleInputs
} from '../assets/styles/components/InputStyle';

export default function EditProfile() {
    const [profileImage, setProfileImage] = useState('');
    const [nome, setNome] = useState('');
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
    const [showBankError, setShowBankError] = useState(false);

    const [showCepError, setShowCepError] = useState(false);
    const [showRoadError, setShowRoadError] = useState(false);
    const [showNeighborhoodError, setShowNeighborhoodError] = useState(false)
    const [showNumberError, setShowNumberError] = useState(false);
    const [showComplementError, setShowComplementError] = useState(false);
    const [showCityError, setShowCityError] = useState('');
    const [showStateError, setShowStateError] = useState('');

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
        const formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (formattedValue.length > 3) {
            return `${formattedValue.slice(0, 3)}-${formattedValue.slice(3)}`;
        } else {
            return formattedValue;
        }
    };

    const formatAgencyNumber = (value) => {
        const formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (formattedValue.length > 4) {
            return `${formattedValue.slice(0, 4)}-${formattedValue.slice(4)}`;
        } else {
            return formattedValue;
        }
    };

    const formatAccountNumber = (value) => {
        const formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos

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

    function handleChangeCep(e) {
        setCep(e.target.value)
    }


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
                                                    <ImagemSelecionada src={profileImage} alt="imagemSelecionada" />
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
                                                onChange={(e) => setNome(e.target.value)}
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
                                                onChange={(e) => setCpf(e.target.value)}
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
                                                onChange={(e) => setDateOfBirth(e.target.value)}
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
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError style={showPhoneNumberError ? { display: 'flex' } : { display: 'none' }}>
                                            <img src={IconError} alt="Digite telefone corretamente" />
                                            <span>Digite telefone corretamente</span>
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
                                            <span>Digite o email corretamente</span>
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
                                                onChange={(e) => handleChangeCep(e)}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showCepError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite o cep corretamente" />
                                            <span>Digite o cep corretamente</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Estado</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Digite o estado"
                                                onChange={(e) => setState(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showStateError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite a número corretamente" />
                                            <span>Digite o estado corretamente</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Cidade</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Digite a cidade"
                                                onChange={(e) => setCity(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showCityError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite a cidade corretamente" />
                                            <span>Digite a cidade corretamente</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Rua</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs} x
                                        >
                                            <input
                                                type="text"
                                                placeholder="Digite a rua"
                                                onChange={(e) => setRoad(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showRoadError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite a rua corretamente" />
                                            <span>Digite a rua corretamente</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Bairro</Label>
                                        <InputContainer
                                            style={{ minWidth: '100%', height: '48px' }}
                                            disabled={disabledAdressInputs}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Digite o bairro"
                                                onChange={(e) => setNeighborhood(e.target.value)}
                                                disabled={disabledAdressInputs}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showNeighborhoodError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite o bairro corretamente" />
                                            <span>Digite o bairro corretamente</span>
                                        </ContainerError>
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
                                        <ContainerError
                                            style={showNumberError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite a número corretamente" />
                                            <span>Digite o número corretamente</span>
                                        </ContainerError>
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
                                        <ContainerError
                                            style={showComplementError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite o complemento corretamente" />
                                            <span>Digite o complemento corretamente</span>
                                        </ContainerError>
                                    </div>
                                </ContainerInputs>
                            </>
                        }
                    />
                </div>
                <ButtonUpdate>Atualizar</ButtonUpdate>
            </Container>
        </>
    )
}