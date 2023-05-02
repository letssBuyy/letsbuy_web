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

export default function EditAd() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('');
    const [price, setPrice] = useState('');

    const [imageOne, setImageOne] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [imageFour, setImageFour] = useState('');
    const [imageFive, setImageFive] = useState('');

    const [showTituloError, setShowTituloError] = useState(false);
    const [showDescriptionError, setShowDescriptionError] = useState(false);
    const [showColorError, setShowColorError] = useState(false);
    const [showCategoryError, setShowCategoryError] = useState(false);
    const [showQualityError, setShowQualityError] = useState(false);
    const [showPriceError, setShowPriceError] = useState(false);
    const [showImagesError, setShowImagesError] = useState(false);

    function handleTituloChange(event) {
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    function handleQualityChange(event) {
        setQuality(event.target.value);
    }

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

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
        console.log(title)
        console.log(description)
        console.log(color)
        console.log(category)
        console.log(quality)
        console.log(price)
        console.log(imageOne)

        setShowTituloError(false)
        setShowDescriptionError(false)
        setShowColorError(false)
        setShowCategoryError(false)
        setShowQualityError(false)
        setShowPriceError(false)
        setShowImagesError(false)
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
                                onChange={handleTituloChange}
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
                                onChange={handleDescriptionChange}
                                maxLength={500}
                            />
                            <span>{description.length}/500</span>
                        </TextAreaContainer>
                        <ContainerError style={showDescriptionError ? { display: 'flex' } : { display: 'none' }}>
                            <img src={IconError} alt="Digite a descrição" />
                            <span>Digite a descrição</span>
                        </ContainerError>
                    </div>

                    <div>
                        <Label>Cor</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={handleColorChange}>
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
                            <select id="color-select" value={category} onChange={handleCategoryChange}>
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
                            <select id="color-select" value={quality} onChange={handleQualityChange}>
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
                                onChange={handlePriceChange}
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
                            <img src={IconError} alt="Digite o preço" />
                            <span>Digite o preço</span>
                        </ContainerError>
                    </div>

                    <Button onClick={() => atualizar()}>Atualizar</Button>
                </Container>
            </div>
        </>
    )
}