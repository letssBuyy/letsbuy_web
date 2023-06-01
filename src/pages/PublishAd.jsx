import React, { useState } from "react";
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

export default function PublishAd() {
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
    const [imageFive, setImageFive] = useState('');

    const [showTituloError, setShowTituloError] = useState(false);
    const [showColorError, setShowColorError] = useState(false);
    const [showCategoryError, setShowCategoryError] = useState(false);
    const [showQualityError, setShowQualityError] = useState(false);
    const [showPriceError, setShowPriceError] = useState(false);
    const [showImagesError, setShowImagesError] = useState(false);

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

    function handleImageFiveChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageFive(reader.result);
        };
    }

    function atualizar() {
        let isValidFields = validateFields()
        
        if (isValidFields) {
            console.log('todos os campos estão validos')
        }
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
            imageFour === null || imageFour === undefined || imageFour === "" ||
            imageFive === null || imageFive === undefined || imageFive === ""
        ) {
            isValidAllFields = false
            setShowImagesError(true)
        } else {
            setShowImagesError(false)
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
                    <Title>Publique seu anúncio</Title>
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
                            <span>Digite o titulo</span>
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
                            <img src={IconError} alt="Escolha a qualidade do seu produto" />
                            <span>Escolha a qualidade do seu produto</span>
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
                            <img src={IconError} alt="Preço inválido" />
                            <span>Preço inválido</span>
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
                                <div>
                                    {
                                        imageFive !== '' ?
                                            <ImagemSelecionada src={imageFive} alt="imagemSelecionada" />
                                            :
                                            <img src={IconCamGray} alt="Selecione uma imagem dos seus arquivos" />
                                    }
                                    <label htmlFor="imagem5"></label>
                                    <input id="imagem5" type="file" onChange={handleImageFiveChange} />
                                </div>
                            </div>

                        </ImagesContainer>
                        <ContainerError style={showImagesError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Fotos obrigatórias (Insira todas as imagens)" />
                            <span>Fotos obrigatórias (Insira todas as imagens)</span>
                        </ContainerError>
                    </div>

                    <Button onClick={() => atualizar()}>Publicar</Button>
                </Container>
            </div>
        </>
    )
}