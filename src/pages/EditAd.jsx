import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import IconError from "../assets/images/icon-error.svg";
import { NumericFormat } from 'react-number-format';
import {
    colorOptions,
    categoryOptions,
    qualityOptions
} from "../utils/enums";
import {
    Container,
    Title,
    SubTitle,
    Button
} from "../assets/styles/EditAdStyle";
import {
    ContainerError,
    InputContainer,
    TextAreaContainer,
    Label
} from '../assets/styles/components/InputStyle';
import { AuthContext } from "../utils/AuthContext";
import { url } from "../utils/request";
import axios from "axios";
import { successAlert, errorAlert } from "../utils/alerts";
import Loading from "../components/Loading";
import { removeCurrencyFormatting } from "../utils/strings"

export default function EditAd() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('');
    const [price, setPrice] = useState("");

    const [showTituloError, setShowTituloError] = useState(false);
    const [showColorError, setShowColorError] = useState(false);
    const [showCategoryError, setShowCategoryError] = useState(false);
    const [showQualityError, setShowQualityError] = useState(false);
    const [showPriceError, setShowPriceError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const idUser = user.id;
    const { id } = useParams();
    let navigate = useNavigate();

    async function updateAd() {
        setLoading(true)

        let isValidFields = validateFields()

        if (isValidFields) {
            await axios.put(`${url}/adversiments/${id}`, {
                userId: idUser,
                title: title,
                description: description,
                price: removeCurrencyFormatting(price),
                category: category,
                quality: quality,
                color: color
            }).then(() => {
                successAlert("Anúncio públicado com sucesso!")
                navigate('/meus-anuncios')
            }).catch((e) => {
                console.log('caiu no cath de dentro')
                errorAlert("Ocorreu um erro ao atualizar o anúncio")
            })
        }

        setLoading(false)
    }

    function validateFields() {
        let isValidAllFields = true

        if (title.length < 2 || title.length > 50) {
            isValidAllFields = false
            setShowTituloError(true)
        } else {
            setShowTituloError(false)
        }

        if (removeCurrencyFormatting(price) <= 1) {
            isValidAllFields = false
            setShowPriceError(true)
        } else {
            setShowPriceError(false)
        }

        if (color === null || color === undefined || color === "") {
            isValidAllFields = false
            setShowColorError(true)
        } else {
            setShowColorError(false)
        }

        if (category === null || category === undefined || category === "") {
            isValidAllFields = false
            setShowCategoryError(true)
        } else {
            setShowCategoryError(false)
        }

        if (quality === null || quality === undefined || quality === "") {
            isValidAllFields = false
            setShowQualityError(true)
        } else {
            setShowQualityError(false)
        }
        return isValidAllFields
    }

    async function load() {
        try {
            setLoading(true)
            await axios.get(`${url}/adversiments/${id}?idUser=${idUser}`).then(async (response) => {
                const data = response.data[0].adversiments
                setTitle(data.title ? data.title : '')
                setDescription(data.description ? data.description : '')
                setColor(data.color ? data.color : '')
                setCategory(data.category ? data.category : '')
                setQuality(data.quality ? data.quality : '')
                setPrice(data.price ? data.price : '')
            }).catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        } else {
            load()
        }
    }, [])

    return (
        <>
            <Loading isEnabled={loading} />
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
                    <Title>Editar seu anúncio</Title>
                    <SubTitle>capriche nas fotos e na descrição do seu produto</SubTitle>

                    <div>
                        <Label>Titulo</Label>
                        <InputContainer>
                            <input
                                type="text"
                                placeholder="Digite o titulo"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            ></input>
                        </InputContainer>
                        <ContainerError style={showTituloError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o titulo corretamente" />
                            <span>Digite o titulo corretamente</span>
                        </ContainerError>
                    </div>

                    <div>
                        <Label>Descrição</Label>
                        <TextAreaContainer>
                            <textarea
                                placeholder="Digite a descrição"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                maxLength={500}
                            />
                            <span>{description.length}/500</span>
                        </TextAreaContainer>
                    </div>

                    <div>
                        <Label>Cor</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={(event) => setColor(event.target.value)}>
                                {colorOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </InputContainer>
                        <ContainerError style={showColorError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Escolha a cor" />
                            <span>Escolha a cor</span>
                        </ContainerError>
                    </div>

                    <div>
                        <Label>Categoria</Label>
                        <InputContainer>
                            <select id="color-select" value={category} onChange={(event) => setCategory(event.target.value)}>
                                {categoryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </InputContainer>
                        <ContainerError style={showCategoryError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Escolha a categoria" />
                            <span>Escolha a categoria</span>
                        </ContainerError>
                    </div>

                    <div>
                        <Label>Qualidade do produto</Label>
                        <InputContainer>
                            <select id="color-select" value={quality} onChange={(event) => setQuality(event.target.value)}>
                                {qualityOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </InputContainer>
                        <ContainerError style={showQualityError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Escolha a categoria" />
                            <span>Escolha a categoria</span>
                        </ContainerError>
                    </div>

                    <div>
                        <Label>Preço</Label>
                        <InputContainer>
                            <NumericFormat
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                decimalSeparator=","
                                thousandSeparator="."
                                prefix="R$ "
                                decimalScale={2}
                                fixedDecimalScale={true}
                                placeholder="R$ 0,00"
                            />
                        </InputContainer>
                        <ContainerError style={showPriceError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite o preço" />
                            <span>Digite o preço</span>
                        </ContainerError>
                    </div>
                    <Button onClick={() => updateAd()}>Atualizar</Button>
                </Container>
            </div>
        </>
    )
}