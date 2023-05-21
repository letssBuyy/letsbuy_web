import React, { useState } from "react";
import Navbar from "../components/Navbar";
import IconError from "../assets/images/icon-error.svg";
import {
    Container,
    Title,
    SubTitle,
    Button
} from "../assets/styles/heldeskStyle"
import {
    ContainerError,
    InputContainer,
    TextAreaContainer,
    Label
} from '../assets/styles/components/InputStyle';

export default function Help() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idAdvertise, setIdAdvertise] = useState('')
    const [description, setDescription] = useState('')

    const [showNomeError, setShowNomeError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    const [showIdError, setShowIdError] = useState(false)
    const [showDescriptionError, setShowDescriptionError] = useState(false)

    function enviarDisputa() {
        console.log(nome)
        console.log(email)
        console.log(idAdvertise)
        console.log(description)
    }

    return (
        <>
            <Navbar
                type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <Container>
                <Title>Precisa de ajuda com seu pedido?</Title>
                <SubTitle>Preencha as informações abaixo e responderemos o mais rápido possível</SubTitle>

                <div>
                    <Label>Nome</Label>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder="Digite o nome"
                            onChange={(e) => { setNome(e.target.value) }}
                        ></input>
                    </InputContainer>
                    <ContainerError style={showNomeError ? { display: 'flex' } : { display: 'none' }}>
                        <img src={IconError} alt="Digite o nome corretamente" />
                        <span>Digite o nome corretamente</span>
                    </ContainerError>
                </div>
                <div>
                    <Label>E-mail</Label>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder="Digite o email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        ></input>
                    </InputContainer>
                    <ContainerError style={showEmailError ? { display: 'flex' } : { display: 'none' }}>
                        <img src={IconError} alt="Digite o email corretamente" />
                        <span>Digite o email corretamente</span>
                    </ContainerError>
                </div>
                <div>
                    <Label>ID do anúncio</Label>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder="Digite o ID do anúncio"
                            onChange={(e) => { setIdAdvertise(e.target.value) }}
                        ></input>
                    </InputContainer>
                    <ContainerError style={showIdError ? { display: 'flex' } : { display: 'none' }}>
                        <img src={IconError} alt="Digite o id corretamente" />
                        <span>Digite o id corretamente</span>
                    </ContainerError>
                </div>
                <div>
                    <Label>Descrição</Label>
                    <TextAreaContainer>
                        <textarea
                            placeholder="Digite a descrição"
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={500}
                        />
                        <span>{description.length}/500</span>
                    </TextAreaContainer>
                    <ContainerError style={showDescriptionError ? { display: 'flex' } : { display: 'none' }}>
                        <img src={IconError} alt="Digite a descrição" />
                        <span>Digite a descrição</span>
                    </ContainerError>
                </div>
                <Button onClick={() => enviarDisputa()}>Enviar disputa</Button>
            </Container>
        </>
    )
}