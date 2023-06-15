import React, { useEffect, useState } from "react";
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
import { url } from "../utils/request";
import { useNavigate } from 'react-router-dom';
import { errorAlert, successAlert } from '../utils/alerts';
import Loading from "../components/Loading";
import { removePhoneNumberFormatter, removeCPFFormatter } from "../utils/strings";

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
    const [disabledAdressInputs, setDisableAdressInputs] = useState(true);

    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    const userID = localStorage.getItem('userId')

    const [file, setFile] = useState(null);
    function handleChangeProfileImage(event) {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile)

        const reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        reader.onload = () => {
            setProfileImage(reader.result);
        };
    }

    async function searchForCEP(cep) {
        if (cep) {
            if (cep.length === 8) {
                try {
                    setLoading(true)
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
                } finally {
                    setLoading(false)
                }
            }
        }
    }

    async function update() {
        let isValidFields = validateFields()

        if (isValidFields) {
            try {
                setLoading(true)
                await axios.put(`${url}/users/${userID}`, {
                    name: name,
                    email: email,
                    cpf: removeCPFFormatter(cpf),
                    birthDate: dateOfBirth,
                    phoneNumber: removePhoneNumberFormatter(phoneNumber),
                    cep: cep,
                    city: city,
                    state: state,
                    neighborhood: neighborhood,
                    road: road,
                    complement: complement,
                    number: number,
                    accountNumber: account,
                    bankAccount: bank,
                    agencyNumber: agency,
                }).then((response) => {
                    if (response.status === 200) {
                        successAlert("Perfil atualizado com sucesso!")
                    } else {
                        errorAlert("Ocorreu um erro ao atualizar o perfil.")
                    }
                })
            } catch (error) {
                errorAlert("Ocorreu um erro ao atualizar o perfil.")
            } finally {
                setLoading(false)
            }
        }
    }

    async function updateProfileImage() {
        const formData = new FormData();
        formData.append('img', file);

        try {
            setLoading(true);
            const response = await axios.post(`${url}/images/user/${userID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                localStorage.setItem('profileImage', response.data.profileImage)
                localStorage.setItem('name', response.data.name)

                successAlert("Imagem atualizada com sucesso!");
            } else {
                errorAlert("Ocorreu um erro ao atualizar a imagem.");
            }
        } catch (error) {
            console.log(error);
            errorAlert("Ocorreu um erro ao atualizar a imagem.");
        } finally {
            setLoading(false);
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

        if (removeCPFFormatter(cpf).length !== 11) {
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

        if (removePhoneNumberFormatter(phoneNumber).length !== 11) {
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

        return isValidAllFields
    }

    async function load() {
        try {
            setLoading(true)
            await axios.get(`${url}/users?sellerId=${userID}`
            ).then((response) => {
                const data = response.data;

                setProfileImage(data.profileImage ? data.profileImage : "");
                setName(data.name ? data.name : '');
                setCpf(data.cpf ? data.cpf : '');
                setDateOfBirth(data.birthDate ? data.birthDate : "");
                setPhoneNumber(data.phoneNumber ? data.phoneNumber : "");
                setEmail(data.email ? data.email : "");

                const bank = data.bankAccount ? data.bankAccount : "";
                setAccount(bank.accountNumber ? bank.accountNumber : "");
                setAgency(bank.agencyNumber ? bank.agencyNumber : "");
                setBank(bank.bankNumber ? bank.bankNumber : "");

                setCep(data.cep ? data.cep : "");
                setState(data.state ? data.state : "");
                setCity(data.city ? data.city : "");
                setNeighborhood(data.neighborhood ? data.neighborhood : "");
                setRoad(data.road ? data.road : "");
                setComplement(data.complement ? data.complement : "");
                setNumber(data.number ? data.number : "");
            })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        } else {
            load();
        }
    }, [])

    useEffect(() => {
        if (file) {
            updateProfileImage();
        }
    }, [file]);

    return (
        <>
            <Loading isEnabled={loading} />
            <Navbar type='basic' isAuthenticated={false} showBackButton={true} />
            <Container>
                <Title>Editar perfil</Title>
                <div>
                    <Accordion
                        header="Dados cadastrais"
                        content={
                            <>
                                <ContainerInputs>
                                    <ProfileImage onChange={handleChangeProfileImage}>
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
                                        <input id="imagem1" type="file" />
                                        <h1>Alterar foto de perfil</h1>
                                    </ProfileImage>
                                    <div>
                                        <Label>Nome</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                            <input
                                                type="text"
                                                placeholder="Digite o nome"
                                                value={name}
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
                                                value={cpf}
                                                onChange={(e) => setCpf(e.target.value)}
                                            ></InputMask>
                                        </InputContainer>
                                        <ContainerError style={showCpfError ? { display: 'flex' } : { display: 'none' }}>
                                            <img src={IconError} alt="Digite o CPF corretamente" />
                                            <span>CPF inválido</span>
                                        </ContainerError>
                                    </div>
                                    <div>
                                        <Label>Data de nascimento</Label>
                                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                                            <input
                                                type="date"
                                                placeholder="00/00/0000"
                                                value={dateOfBirth}
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
                                            <span>Telefone inválido</span>
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
                                                value={email}
                                                placeholder="Digite o email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            ></input>
                                        </InputContainer>
                                        <ContainerError
                                            style={showEmailError ? { display: 'flex' } : { display: 'none' }}
                                        >
                                            <img src={IconError} alt="Digite o email corretamente" />
                                            <span>E-mail inválido</span>
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
                                                    max={4}
                                                    maxLength={4}
                                                    value={bank}
                                                    onChange={(e) => setBank(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <span>Agência</span>
                                                <input
                                                    type="text"
                                                    placeholder="0000"
                                                    max={4}
                                                    maxLength={4}
                                                    value={agency}
                                                    onChange={(e) => setAgency(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <span>Conta</span>
                                                <input
                                                    type="text"
                                                    placeholder="0000"
                                                    max={4}
                                                    maxLength={4}
                                                    value={account}
                                                    onChange={(e) => setAccount(e.target.value)}
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
                                                onBlur={(e) => searchForCEP(e.target.value)}
                                                maxLength={8}
                                                value={cep}
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
                                                value={number}
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
                                                value={complement}
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
                <ButtonUpdate onClick={() => { update() }}>Atualizar</ButtonUpdate>
            </Container>
        </>
    )
}