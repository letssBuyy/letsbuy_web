import React, { useState } from "react";
import IconClose from "../assets/images/icon-close.svg";
import IconFilter from "../assets/images/icon-filter.svg";
import IconSearch from "../assets/images/icon-search.svg";
import ImageDefault from '../assets/images/image-default.png';
import { CoupleInputs, InputContainer, Label } from '../assets/styles/components/InputStyle';
import {
    ButtonOpenSideBarMobile,
    Checkbox,
    CloseButton,
    Container,
    ContainerAdvertise,
    ContainerCheckbox,
    Header,
    Input,
    OrdinationMobile,
    SelectOrdenation,
    SideBar
} from "../assets/styles/searchAdStyle";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { categoryOptions, colorOptions } from "../utils/enums";
import { NumericFormat } from 'react-number-format';
import iconLocation from "../assets/images/icon-location.svg"

export default function SearchAd() {
    const [cardList, setCardList] = useState([1, 2, 3, 4, 5])
    const [localization, setLocalization] = useState('')
    const [color, setColor] = useState('')
    const [newQuality, setNewQuality] = useState(false)
    const [semiNewQuality, setSemiNewQuality] = useState(false)
    const [usedQuality, setUsedQuality] = useState(false)
    const [deffectiveQuality, setDeffectiveQuality] = useState(false)
    const [mobileSideBar, setMobileSideBar] = useState(false)
    const [maxValue, setMaxValue] = useState('')
    const [minValue, setMinValue] = useState('')

    function handleChangeMaxValue(event) {
        setMaxValue(event.target.value);
    }

    function handleChangeMinValue(event) {
        setMinValue(event.target.value);
    }

    function handleClickSeller() {
        console.log('clicou no vendedor')
    }

    function handleClickCard() {
        console.log('clicou no card')
    }

    const [isSelectedHeart, setIsSelectedHeart] = useState(false)
    function handleClickHeart() {
        setIsSelectedHeart(!isSelectedHeart)
    }

    function loadCards() {
        setCardList([1, 2, 3, 4, 5])
    }

    function handleLocalizationHandle(event) {
        setLocalization(event.target.value);
    }

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    function handleChangeNewQuality() {
        setNewQuality(!newQuality)
    }

    function handleChangeUsedQuality() {
        setUsedQuality(!usedQuality)
    }

    function handleChangeSemiNewQualityy() {
        setSemiNewQuality(!semiNewQuality)
    }

    function handleChangeDeffectiveQuality() {
        setDeffectiveQuality(!deffectiveQuality)
    }

    function handleChangeMobileSideBar() {
        setMobileSideBar(!mobileSideBar)
    }

    return (
        <>
            <Navbar type='principal' isAuthenticated={false} />
            <Container>
                <SideBar isOpen={mobileSideBar ? 'flex' : 'none'}>
                    <CloseButton>
                        <button onClick={() => { handleChangeMobileSideBar() }}>
                            <img src={IconClose} alt="Fechar Edição de filtros" />
                        </button>
                    </CloseButton>
                    <OrdinationMobile>
                        <Label>Ordenar por:</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={handleColorChange}>
                                <option>Mais recentes</option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                            </select>
                        </InputContainer>
                    </OrdinationMobile>
                    <div>
                        <br />
                        <Label>Localização</Label>
                        <InputContainer style={{ minWidth: '100%', height: '48px' }}>
                            <input
                                type="text"
                                placeholder="Digite seu estado ou cidade"
                                onChange={handleLocalizationHandle}
                            ></input>
                            <img src={iconLocation} alt="Digite a localização"
                            />
                        </InputContainer>
                    </div>
                    <div>
                        <Label>Preço</Label>
                        <CoupleInputs>
                            <div>
                                <span>Min:</span>
                                <NumericFormat
                                    value={minValue}
                                    onChange={handleChangeMinValue}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                            <div>
                                <span>Max:</span>
                                <NumericFormat
                                    value={maxValue}
                                    onChange={handleChangeMaxValue}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    placeholder="R$ 0,00"
                                />
                            </div>
                        </CoupleInputs>
                    </div>
                    <div>
                        <Label>Qualidade do produto</Label>
                        <br />
                        <br />
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={newQuality}
                                onChange={handleChangeNewQuality}
                            />
                            <p>Novo</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={semiNewQuality}
                                onChange={handleChangeSemiNewQualityy}
                            />
                            <p>Semi Novo</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={usedQuality}
                                onChange={handleChangeUsedQuality}
                            />
                            <p>Usado</p>
                        </ContainerCheckbox>
                        <ContainerCheckbox>
                            <Checkbox
                                type="checkbox"
                                checked={deffectiveQuality}
                                onChange={handleChangeDeffectiveQuality}
                            />
                            <p>Defeituoso</p>
                        </ContainerCheckbox>
                    </div>
                    <div>
                        <Label>Categoria</Label>
                        <InputContainer>
                            <select id="color-select" value={color} onChange={handleColorChange}>
                                {categoryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                        </InputContainer>
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
                    </div>
                </SideBar>
                <div>
                    <Header>
                        <Input>
                            <input placeholder="O que você gostaria de encontrar hoje?" />
                            <img src={IconSearch} alt="Pesquise por anuncios" />
                        </Input>

                        <SelectOrdenation>
                            <img src={IconFilter} alt="Ordenar" />
                            <select>
                                <option>Mais recentes</option>
                                <option>Menor preço</option>
                                <option>Maior preço</option>
                            </select>
                        </SelectOrdenation>
                        <ButtonOpenSideBarMobile onClick={() => handleChangeMobileSideBar()}>
                            Ordenar e filtrar
                        </ButtonOpenSideBarMobile>
                    </Header>
                    <ContainerAdvertise>
                        {cardList.map((card, index) => (
                            <Card
                                key={index}
                                image={ImageDefault}
                                price={'200'}
                                name={'Bolsa marrom'}
                                brand={'Tommy'}
                                sellerName={'Luiz'}
                                sellerCity={'São Paulo'}
                                sellerState={'SP'}
                                sellerIsVerify={true}
                                sellerImageProfile={ImageDefault}
                                isSelectedHeart={isSelectedHeart}
                                onClickHeart={handleClickHeart}
                                onClickSeller={handleClickSeller}
                                onClickCard={handleClickCard}
                                margin={'5px'}
                            />
                        ))}
                    </ContainerAdvertise>
                </div>
            </Container>
        </>
    )
}