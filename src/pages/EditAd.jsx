import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import IconError from "../assets/images/icon-error.svg";
import IconCamPink from "../assets/images/icon-cam-pink.svg";
import IconCamGray from "../assets/images/icon-cam-gray.svg";
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
    Label,
    ImagesContainer,
    ImagemSelecionada
} from '../assets/styles/components/InputStyle';
import { AuthContext } from "../utils/AuthContext";
import { url } from "../utils/request";
import axios from "axios";
import { successAlert, errorAlert } from "../utils/alerts";
import Loading from "../components/Loading";

export default function EditAd() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('');
    const [price, setPrice] = useState('0');

    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [imageFour, setImageFour] = useState('');

    const [showTituloError, setShowTituloError] = useState(false);
    const [showColorError, setShowColorError] = useState(false);
    const [showCategoryError, setShowCategoryError] = useState(false);
    const [showQualityError, setShowQualityError] = useState(false);
    const [showPriceError, setShowPriceError] = useState(false);
    const [showImagesError, setShowImagesError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, isAuthenticated } = useContext(AuthContext);
    const idUser = user.id;
    const { id } = useParams();

    let navigate = useNavigate();

    function handleImageOneChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageOne(reader.result);
        };
    }

    function handleImageTwoChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageTwo(reader.result);
        };
    }

    function handleImageThreeChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageThree(reader.result);
        };
    }

    function handleImageFourChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageFour(reader.result);
        };
    }

    async function updateAd() {
        try {
            setLoading(true)

            let isValidFields = validateFields()

            if (isValidFields) {
                await axios.put(`${url}/adversiments/${id}`, {
                    userId: idUser,
                    title: title,
                    description: description,
                    price: price,
                    category: category,
                    quality: quality,
                    color: color
                }).then(async (response) => {
                    await uploadImages(response.data.id).then(() => {
                        successAlert("Anúncio atualizado com sucesso!")
                    }).catch(() => {
                        errorAlert("Ocorreu um erro ao atualizar o anúncio")
                    })
                }).catch((e) => {
                    errorAlert("Ocorreu um erro ao atualizar o anúncio")
                })
            }
        } catch (error) {
            errorAlert("Ocorreu um erro ao atualizar o anúncio")
        } finally {
            setLoading(false)
        }
    }

    async function uploadImages(idAdvertise) {
        const formData = new FormData();

        formData.append('img1', imageOne);
        formData.append('img2', imageTwo);
        formData.append('img3', imageThree);
        formData.append('img4', imageFour);

        await axios.post(`${url}/images/adversiment/${idAdvertise}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    function validateFields() {
        let isValidAllFields = true

        if (title.length < 2 || title.length > 50) {
            isValidAllFields = false
            setShowTituloError(true)
        } else {
            setShowTituloError(false)
        }

        const formattedPrice = price.replace(/[R$,]/g, '');
        const parsedPrice = parseFloat(formattedPrice);

        if (parsedPrice <= 100) {
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

        if (
            imageOne === null || imageOne === undefined || imageOne === "" ||
            imageTwo === null || imageTwo === undefined || imageTwo === "" ||
            imageThree === null || imageThree === undefined || imageThree === "" ||
            imageFour === null || imageFour === undefined || imageFour === ""
        ) {
            isValidAllFields = false
            setShowImagesError(true)
        } else {
            setShowImagesError(false)
        }

        return isValidAllFields
    }

    function load() {

    }

    useEffect(() => {
        if (!isAuthenticated) {
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
                    <div>
                        <Label>Fotos</Label>
                        <ImagesContainer>
                            <div>
                                {
                                    imageOne !== '' ?
                                        <ImagemSelecionada src={imageOne} alt="imagemSelecionada" />
                                        :
                                        <img src={IconCamPink} alt="Selecione uma imagem dos seus arquivos" />
                                }
                                <label htmlFor="imagem1"></label>
                                <input id="imagem1" type="file" onChange={handleImageOneChange} />
                            </div>
                            <div>
                                <div>
                                    {
                                        imageTwo !== '' ?
                                            <ImagemSelecionada src={imageTwo} alt="imagemSelecionada" />
                                            :
                                            <img src={IconCamGray} alt="Selecione uma imagem dos seus arquivos" />
                                    }
                                    <label htmlFor="imagem2"></label>
                                    <input id="imagem2" type="file" onChange={handleImageTwoChange} />
                                </div>
                                <div>
                                    {
                                        imageThree !== '' ?
                                            <ImagemSelecionada src={imageThree} alt="imagemSelecionada" />
                                            :
                                            <img src={IconCamGray} alt="Selecione uma imagem dos seus arquivos" />
                                    }
                                    <label htmlFor="imagem3"></label>
                                    <input id="imagem3" type="file" onChange={handleImageThreeChange} />
                                </div>
                                <div>
                                    {
                                        imageFour !== '' ?
                                            <ImagemSelecionada src={imageFour} alt="imagemSelecionada" />
                                            :
                                            <img src={IconCamGray} alt="Selecione uma imagem dos seus arquivos" />
                                    }
                                    <label htmlFor="imagem4"></label>
                                    <input id="imagem4" type="file" onChange={handleImageFourChange} />
                                </div>
                            </div>

                        </ImagesContainer>
                        <ContainerError style={showImagesError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Fotos obrigatórias (Insira todas as imagens)" />
                            <span>Fotos obrigatórias (Insira todas as imagens)</span>
                        </ContainerError>
                    </div>

                    <Button onClick={() => updateAd()}>Atualizar</Button>
                </Container>
            </div>
        </>
    )
}